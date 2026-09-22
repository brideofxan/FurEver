CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age TEXT,
    gender TEXT,
    animal_type TEXT NOT NULL,
    activity_level TEXT,
    housing TEXT,
    good_with_children TEXT,
    good_with_animals TEXT,
    special_needs TEXT,
    status TEXT NOT NULL DEFAULT 'Available',
    image_path TEXT NOT NULL,
    description TEXT
);

INSERT INTO animals(
  name, animal_type, image_path
) VALUES ( 'Pato', 'Cat', '/uploads/animals/pato.jpg' ),
( 'Pascal', 'Cat', '/uploads/animals/pascal.jpg' ),
( 'Archibald', 'Cat', '/uploads/animals/archibald.jpg' ),
( 'Patoski', 'Cat', '/uploads/animals/pato-selfie.jpg' ),
( 'Explorer Lad', 'Cat', '/uploads/animals/explorer-boi.jpg' ),
( 'Fancy Lad', 'Cat', '/uploads/animals/anniversary-boi.jpg' ),
( 'Solpågen', 'Cat', '/uploads/animals/sun-boi.jpg' );

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  animal_id INTEGER NOT NULL,
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Mottagen',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT,
  FOREIGN KEY (animal_id) REFERENCES animals(id)
);

INSERT INTO applications (animal_id, applicant_name, applicant_email, status)
VALUES 
(1, 'Anna Andersson', 'anna@example.com', 'Mottagen'),
(2, 'Erik Karlsson', 'erik@example.com', 'Under granskning'),
(3, 'Maria Johansson', 'maria@example.com', 'Godkänd');
