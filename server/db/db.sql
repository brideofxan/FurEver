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
) VALUES ( 'Pato', 'katt', 'uploads/animals/pato.jpg' ),
( 'Pascal', 'katt', 'uploads/animals/pascal.jpg' ),
( 'Archibald', 'katt', 'uploads/animals/archibald.jpg' ),
( 'Patoski', 'katt', 'uploads/animals/pato-selfie.jpg' ),
( 'Explorer Lad', 'katt', 'uploads/animals/explorer-boi.jpg' ),
( 'Fancy Lad', 'katt', 'uploads/animals/anniversary-boi.jpg' ),
( 'Solpågen', 'katt', 'uploads/animals/sun-boi.jpg' );

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL
);
