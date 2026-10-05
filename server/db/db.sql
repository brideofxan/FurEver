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
    status TEXT NOT NULL DEFAULT 'Tillgänglig',
    image_path TEXT NOT NULL,
    description TEXT
);

INSERT INTO animals(
  name, age, gender, animal_type, image_path
) VALUES ( 'Pato', '7 år', 'Påg', 'Katt', '/uploads/animals/pato.jpg' ),
( 'Zac', '13 år', 'Gubbe', 'Hund', '/uploads/animals/image2.jpg' ),
( 'Lexi', '11 år', 'Tant', 'Katt', '/uploads/animals/6d2c0258-c9d7-482d-8f84-b5470d334bb4.png' ),
( 'Safi', '0.5 år', 'Hane', 'Katt', '/uploads/animals/FE94D635-C255-4CF8-A8BA-262774F505B9.png' ),
( 'Ori', '1 år', 'Ungkarl', 'Hund', '/uploads/animals/image7.jpg' ),
( 'Muffins', '1 år', 'Okänt', 'Kanin', '/uploads/animals/photo-1535241749838-299277b6305f.png' ),
( 'Zorro', '4 år', 'Herre', 'Hund', '/uploads/animals/photo-1514373941175-0a141072bbc8.png' ),
( 'Pascal', '7 år', 'Pojke', 'Katt', '/uploads/animals/pato-selfie.jpg' ),
( 'Sonja', '4 år', 'Tös', 'Kanin', '/uploads/animals/photo-1564650211163-21049f1b683a.png' ),
( 'Pixel', '11 år', 'Surgubbe', 'Hund', '/uploads/animals/1789728534388-65407719996__4E145EB9-A4D5-4F63-ABA2-9D99583503B5.JPEG' );

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  animal_id INTEGER NOT NULL,
  applicant_name TEXT NOT NULL,
  applicant_email TEXT,
  applicant_phone TEXT NOT NULL,
  housing_type TEXT,
  about_you TEXT,
  other_pets TEXT,
  status TEXT NOT NULL DEFAULT 'Mottagen',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_by TEXT,
  FOREIGN KEY (animal_id) REFERENCES animals(id)
);

CREATE TABLE IF NOT EXISTS content (
  key TEXT PRIMARY KEY,
  heading TEXT,
  body TEXT
);

INSERT INTO content(key, heading, body)
VALUES ('Home', 'Välkommen till FurEver', 'Hitta din nya familjemedlem!');
