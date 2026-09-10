import { Router } from "express";
import { getAllAnimals } from "../controllers/animalsControllers.js";

const router = Router();

router.get("/", getAllAnimals);

export default router;
