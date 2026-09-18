// import db from "../db/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
  const { username, password, confirmPassword } = req.body;
  console.log("Req body:", req.body);

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

  // TODO: Check if user exists, create fake user to check against

  // TODO: When all checks pass, salt and hash password, console log result

  // TODO: Implement db logic to register a user

  // TODO: Implement db logic to check if a real user exists

  return res
    .status(200)
    .json({ message: "This works!", username, password, confirmPassword });
}
