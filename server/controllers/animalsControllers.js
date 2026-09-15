import db from "../db/db.js";

export function getAllAnimals(req, res) {
  try {
    const animals = db.prepare("SELECT * FROM animals").all();
    return res.status(200).json(animals);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Couldn't get animals...",
    });
  }
}
