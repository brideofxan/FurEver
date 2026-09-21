import express from "express";
import {
  getAllApplications,
  updateApplicationStatus,
} from "../controllers/applicationsController.js";

const router = express.Router();

router.get("/", getAllApplications);

router.put("/:id", updateApplicationStatus);


export default router;
