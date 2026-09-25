import express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import session from "express-session";

import animalRoutes from "./routes/animalRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import applicationsRoutes from "./routes/applicationsRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 8000;

// Global middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "public")));
app.use(
  session({
    secret: "Super duper hard to guess secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, // ms * sec * min * hours * days = 30 days
    },
  }),
);

// Routes
app.use("/api/animals", animalRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationsRoutes);
app.use("/api/admin/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});
