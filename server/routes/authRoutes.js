import { Router } from "express";
import {
  getCurrentUser,
  login,
  logout,
  registerUser,
  requireLogin,
} from "../controllers/authControllers.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", login);

router.post("/logout", logout);

router.get("/user", requireLogin, getCurrentUser);

export default router;
