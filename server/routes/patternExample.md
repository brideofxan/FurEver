import express from "express";
import { controllerFunction } from "path/to/controller.js";

const router = express.Router();

router.method("/route", controllerFunction);

export default router;
