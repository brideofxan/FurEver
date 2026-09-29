import db from "../db/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
  const { username, password, confirmPassword } = req.body;

  if (!username || !password || !confirmPassword) {
    return res.status(400).json({
      error: "Vänligen fyll i alla fält",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      error: "Lösenorden måste matcha, vänligen försök igen",
    });
  }

  const strongPassword = validator.isStrongPassword(`${password}`);
  if (!strongPassword) {
    return res.status(400).json({
      error:
        "Lösenordet är inte starkt nog, se till att det innehåller följande:",
      passwordRequirements: [
        "Minst 8 tecken",
        "Stora och små bokstäver",
        "Minst ett specialtecken, t.ex: @",
      ],
    });
  }
  try {
    const usernameTaken = db
      .prepare("SELECT id FROM users WHERE username = ?")
      .get(username);
    if (usernameTaken) {
      return res.status(409).json({
        error: "Användaren finns redan, vänligen försök igen.",
      });
    }

    const password_hash = await bcrypt.hash(password, 10);

    db.prepare(
      ` INSERT INTO users (username, password_hash) VALUES (@username, @password_hash) `,
    ).run({ username, password_hash });

    return res.status(201).json({ message: "Användare skapad!" });
  } catch (error) {
    console.error("Något gick fel vid registrering av användaren: ", error);

    return res.status(500).json({
      error: "Något gick fel, vänligen försök igen senare.",
    });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Vänligen fyll i alla fält",
    });
  }

  try {
    const user = db
      .prepare(`SELECT * FROM users WHERE username = ?`)
      .get(username);

    if (!user) {
      return res.status(401).json({
        error: "Fel användarnamn eller lösenord.",
      });
    }

    const pwdMatch = await bcrypt.compare(password, user.password_hash);
    if (!pwdMatch) {
      return res.status(401).json({
        error: "Fel användarnamn eller lösenord.",
      });
    }

    req.session.userId = user.id;
    req.session.username = user.username;

    return res.status(200).json({
      message: "Du loggas nu in!",
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    console.error("Något gick fel vid inloggningen: ", error);

    return res.status(500).json({
      error: "Något gick fel, vänligen försök igen senare.",
    });
  }
}

export function logout(req, res) {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        error: "Något gick fel vid utloggningen, vänligen försök igen.",
      });
    }
    res.clearCookie("connect.sid");
    return res.status(200).json({
      message: "Du loggas nu ut...",
    });
  });
}

export function getCurrentUser(req, res) {
  if (!req.session.userId) {
    return res.status(200).json({ user: null });
  }
  return res.status(200).json({
    user: { id: req.session.userId, username: req.session.username },
  });
}
