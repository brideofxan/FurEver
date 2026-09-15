import express from "express";
import morgan from "morgan";

import adminAnimalsRoute from "./routes/adminAnimals.js";
import animalsRoute from "./routes/animals.js";

const app = express();

const PORT = 4000;

// Global middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/admin", adminAnimalsRoute);
app.use("/api", animalsRoute);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});
