import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import db from '../db/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'public', 'uploads', 'animals'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// POST /api/admin/animals
router.post('/', upload.single('image'), (req, res) => {
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
      description
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

    res.status(201).json({ message: 'Djuret sparades!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Något gick fel vid sparande.' });
  }
});

// GET /api/admin/animals
router.get('/animals', (req, res) => {
  const animals = db.prepare('SELECT * FROM animals').all();
  res.json(animals);
});

export default router;