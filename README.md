# FurEver 🐾

FurEver is a website where you can adopt animals that are in need of a new home. It lets visitors browse adoptable animals and learn about the adoption process, while shelter administrators can manage animal listings, review adoption applications, and edit site text — all from an admin panel.

## Tech Stack

**Frontend**
- React 19
- React Router
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vite

**Backend**
- Node.js + Express 5
- SQLite via `better-sqlite3`
- Multer (image uploads)
- Morgan (request logging)

**Tooling**
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)
- Nodemon
- Concurrently (runs client + server together)

## Project Structure

```
FurEver/
├── client/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── logo_furever.png
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       │   ├── AdminLayout.jsx
│       │   ├── AnimalCard.jsx
│       │   └── Navbar.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── Animals.jsx
│           ├── AdoptionProcess.jsx
│           ├── AdminForm.jsx
│           ├── AdminTextForm.jsx
│           └── AdminApplications.jsx
├── server/
│   ├── app.js                  # Express app entry point
│   ├── routes/
│   │   ├── animalRoutes.js
│   │   └── applicationsRoutes.js
│   ├── controllers/
│   │   ├── animalsControllers.js
│   │   └── applicationsController.js
│   ├── db/
│   │   ├── FurEver.db
│   │   ├── db.sql               # schema + seed data
│   │   └── db.js                # better-sqlite3 connection
│   └── public/
│       └── uploads/
│           └── animals/         # Uploaded animal images
├── package.json
└── .prettierrc
```

## Database

SQLite database with three tables (see `server/db/db.sql`):

- **animals** — id, name, age, gender, animal_type, activity_level, housing, good_with_children, good_with_animals, special_needs, status, image_path, description
- **applications** — id, animal_id (FK → animals), applicant_name, applicant_email, status, updated_at, updated_by
- **content** — key (PK), heading, body — used for editable page text (headings/body copy managed from the admin panel)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

> The commands below are plain `git`/`npm` commands, so they work the same whether you use bash, PowerShell, or another terminal.

```bash
git clone https://github.com/brideofxan/FurEver.git
cd FurEver
npm install
```

All dependencies (frontend and backend) are managed from the root `package.json`.

### Running the app

Run both the backend and frontend together:

```bash
npm run dev
```

This starts:
- the Express API on **http://localhost:8000** (via `nodemon server/app.js`)
- the Vite dev server for the React frontend (via `vite client`)

You can also run them separately:

```bash
npm run dev:server   # backend only
npm run dev:client   # frontend only
```

### Other scripts

| Script | Description |
|---|---|
| `npm run build` | Build the frontend for production (`vite build client`) |
| `npm run preview` | Preview the production build (`vite preview client`) |
| `npm run lint` | Run ESLint across the project |

## API Overview

### Animals

Mounted at both `/api/animals` and `/api/admin/animals` (same router, reused for public and admin access).

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all animals |
| POST | `/` | Create a new animal (multipart form, field `image`) |

### Page content

Also part of the animals router, mounted under `/api/animals/content` and `/api/admin/animals/content`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/content` | Get all page content entries |
| GET | `/content/:key` | Get a single content entry by key |
| PUT | `/content/:key` | Create or update a content entry (heading/body) |

### Applications

Mounted at `/api/applications`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all adoption applications |
| PUT | `/:id` | Update the status of an application |

Static files (including uploaded animal images) are served from `server/public`, e.g. `/uploads/animals/<filename>.jpg`.

## Team

Built by **FurEverTeam**:
- Linda
- Chatie
- Sebastian
- Sagal

## License

This project is for educational purposes.
