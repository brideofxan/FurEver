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
) VALUES ( 'Pato', 'Cat', '/images/pato.jpg' ),
( 'Pascal', 'Cat', '/images/pascal.jpg' ),
( 'Archibald', 'Cat', '/images/archibald.jpg' ),
( 'Patoski', 'Cat', '/images/pato-selfie.jpg' ),
( 'Explorer Lad', 'Cat', '/images/explorer-boi.jpg' ),
( 'Fancy Lad', 'Cat', '/images/anniversary-boi.jpg' ),
( 'Solpågen', 'Cat', '/images/sun-boi.jpg' );
