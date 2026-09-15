import express from 'express';
import db from '../db/db.js';

const router = express.Router();

// GET /api/animals — publik lista, bara adopterbara djur
router.get('/', (req, res) => {
  try {
    const animals = db.prepare(
      "SELECT * FROM animals WHERE status = 'Adopterbar'"
    ).all();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Något gick fel vid hämtning.' });
  }
});

export default router;