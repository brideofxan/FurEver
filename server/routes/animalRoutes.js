import { Router } from "express";
import {
  getAllAnimals,
  getAnimalById,
  upload,
  createAnimal,
} from "../controllers/animalsControllers.js";

const router = Router();

router.get("/", getAllAnimals);
router.get("/:id", getAnimalById);
router.post("/", upload.single("image"), createAnimal);

export default router;