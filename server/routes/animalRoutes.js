import { Router } from "express";
import { getAllAnimals, upload, createAnimal } 
from "../controllers/animalsControllers.js";

const router = Router();

router.get("/", getAllAnimals);
router.post("/", upload.single("image"), createAnimal);

export default router;
