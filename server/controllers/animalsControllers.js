import db from "../db/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "uploads", "animals"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

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

export function getAnimalById(req, res) {
  try {
    const animal = db
      .prepare("SELECT * FROM animals WHERE id = ?")
      .get(req.params.id);

    if (!animal) {
      return res.status(404).json({ error: "Djuret hittades inte" });
    }

    return res.status(200).json(animal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Kunde inte hämta djuret" });
  }
}

export function createAnimal(req, res) {
  try {
    const {
      name,
      age,
      gender,
      animal_type,
      activity_level,
      housing,
      good_with_children,
      good_with_animals,
      special_needs,
      status,
      description,
    } = req.body;

    const imagePath = req.file
      ? `/uploads/animals/${req.file.filename}`
      : null;

    const stmt = db.prepare(`
      INSERT INTO animals (
        name, age, gender, animal_type, activity_level,
        housing, good_with_children, good_with_animals,
        special_needs, status, image_path, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      name,
      age,
      gender,
      animal_type,
      activity_level,
      housing,
      good_with_children,
      good_with_animals,
      special_needs,
      status,
      imagePath,
      description
    );

    return res.status(201).json({ message: "Djuret sparades!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Kunde inte spara djuret...",
    });
  }
}