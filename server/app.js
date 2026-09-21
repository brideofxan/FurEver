import express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Route imports
// import exampleRoute from "path/to/exampleRoute.js";
import animalRoutes from "./routes/animalRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 8000;

// Global middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "public")));

// Routes
// app.use("/api/route", exampleRoute);
app.use("/api/animals", animalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});
