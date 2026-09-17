import express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Route imports
// import exampleRoute from "path/to/exampleRoute.js";
import animalRoutes from "./routes/animalRoutes.js";
import applicationsRoutes from "./routes/applicationsRoutes.js";


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
app.use("/api/applications", applicationsRoutes);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});

// Lägg till detta längst ner i din server/app.js (under app.listen)
setInterval(() => {
    // Den här tomma timern håller Node.js-eventloopen aktiv
}, 1000000);
