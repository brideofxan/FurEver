import { Router } from "express";
import {
  getAllAnimals,
  getAnimalById,
  upload,
  createAnimal,
  getAllContent,
  getContentByKey,
  upsertContent,
} from "../controllers/animalsControllers.js";

const router = Router();

// Animals
router.get("/", getAllAnimals);
router.get("/:id", getAnimalById);
router.post("/", upload.single("image"), createAnimal);

// Page texts (content)
router.get("/content", getAllContent);
router.get("/content/:key", getContentByKey);
router.put("/content/:key", upsertContent);

export default router;