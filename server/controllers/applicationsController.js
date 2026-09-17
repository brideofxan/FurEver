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
        return res.status(500).json({ error: 'Kunde inte hämta ansökningar' });
    }
};

export const updateApplicationStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['Mottagen', 'Under granskning', 'Godkänd', 'Avslag'];
    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({ error: 'Ogiltig status angiven' });
    }

    try {
        const query = `
        UPDATE applications
        SET status = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
        `;

        // better-sqlite3 använder .run() för uppdateringar
        const info = db.prepare(query).run(status, id);

        // info.changes visar hur många rader som påverkades
        if (info.changes === 0) {
            return res.status(404).json({ error: 'Hittade ingen ansökan med det ID:t'});
        }

        res.json({ message: 'Status uppdaterad!', id, status });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Kunde inte uppdatera status' });
    }
};
