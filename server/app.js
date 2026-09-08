import express from "express";
import morgan from "morgan";

// Route imports
// import { exampleRoute } from "path/to/exampleRoute.js";

const app = express();

const PORT = 3000;

// Global middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
// app.use("/api/route", exampleRoute);

app.listen(PORT, () => {
  console.log(`Servern springer iväg! ${PORT}`);
});
