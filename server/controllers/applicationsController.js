import db from "../db/db.js";

export const getAllApplications = (req, res) => {
  try {
    const query = `
    SELECT applications.*, animals.name AS animal_name
    FROM applications
    LEFT JOIN animals ON applications.animal_id = animals.id
    ORDER BY applications.updated_at DESC 
    `;

    const rows = db.prepare(query).all();
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Kunde inte hämta ansökningar" });
  }
};

export const createApplication = (req, res) => {
  const {
    animal_id,
    applicant_name,
    applicant_email,
    applicant_phone,
    housing_type,
    about_you,
    other_pets,
  } = req.body;

  if (!animal_id || !applicant_name || !applicant_email) {
    return res.status(400).json({
      error: "animal_id, applicant_name och applicant_email krävs",
    });
  }

  try {
    const animal = db
      .prepare("SELECT id FROM animals WHERE id = ?")
      .get(animal_id);

    if (!animal) {
      return res.status(404).json({ error: "Djuret hittades inte" });
    }

    const query = `
      INSERT INTO applications (
        animal_id, applicant_name, applicant_email, applicant_phone,
        housing_type, about_you, other_pets, status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Mottagen')
    `;

    const info = db
      .prepare(query)
      .run(
        animal_id,
        applicant_name,
        applicant_email,
        applicant_phone || null,
        housing_type || null,
        about_you || null,
        other_pets || null
      );

    res.status(201).json({
      message: "Ansökan mottagen!",
      id: info.lastInsertRowid,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Kunde inte spara ansökan" });
  }
};

export const updateApplicationStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatuses = ["Mottagen", "Under granskning", "Godkänd", "Avslag"];
  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ error: "Ogiltig status angiven" });
  }

  try {
    const query = `
    UPDATE applications
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `;

    const info = db.prepare(query).run(status, id);

    if (info.changes === 0) {
      return res.status(404).json({ error: "Hittade ingen ansökan med det ID:t" });
    }

    res.json({ message: "Status uppdaterad!", id, status });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Kunde inte uppdatera status" });
  }
};