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
