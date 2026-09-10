import express from "express";
import morgan from "morgan";

// Route imports
// import exampleRoute from "path/to/exampleRoute.js";
import animalRoutes from "./routes/animalRoutes.js";

const app = express();

const PORT = 3000;

// Global middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
// app.use("/api/route", exampleRoute);
app.use("/api/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});
