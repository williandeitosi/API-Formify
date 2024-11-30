import { Router } from "express";
import AuthController from "../controllers/auth.controller";
const router = Router();

const authController = new AuthController();

router.get("/register", authController.registerUser);

export default router;
