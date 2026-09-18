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
) VALUES ( 'Pato', 'katt', '/images/pato.jpg' ),
( 'Pascal', 'katt', '/images/pascal.jpg' ),
( 'Archibald', 'katt', '/images/archibald.jpg' ),
( 'Patoski', 'katt', '/images/pato-selfie.jpg' ),
( 'Explorer Lad', 'katt', '/images/explorer-boi.jpg' ),
( 'Fancy Lad', 'katt', '/images/anniversary-boi.jpg' ),
( 'Solpågen', 'katt', '/images/sun-boi.jpg' );

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL
);
