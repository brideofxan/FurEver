import { Router } from "express";
import { controllerFunction } from "path/to/controller.js";

const router = Router();

router.method("/route", controllerFunction);

export default router;
