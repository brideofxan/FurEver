CREATE TABLE animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age TEXT NOT NULL,
    gender TEXT NOT NULL,
    animal_type TEXT NOT NULL,
    activity_level TEXT NOT NULL,
    housing TEXT NOT NULL,
    good_with_children TEXT NOT NULL,
    good_with_animals TEXT NOT NULL,
    special_needs TEXT,
    status TEXT NOT NULL,
    image_path TEXT,
    description TEXT
)
