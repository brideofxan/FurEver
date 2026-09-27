import express from "express";
import {
  getAllApplications,
  createApplication,
  updateApplicationStatus,
} from "../controllers/applicationsController.js";

const router = express.Router();

router.get("/", getAllApplications);
router.post("/", createApplication);
router.put("/:id", updateApplicationStatus);

export default router;