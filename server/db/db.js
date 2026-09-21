import Database from "better-sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, "../db/FurEver.db"), {
  verbose: console.log,
});

db.pragma("foreign_keys = ON");

export default db;
