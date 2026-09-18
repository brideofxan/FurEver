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
        message: "Användaren finns redan, vänligen försök igen.",
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
