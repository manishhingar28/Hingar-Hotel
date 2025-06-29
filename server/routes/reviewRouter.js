import express from "express";
import {addReview, getReview} from "../controllers/ReviewController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", authenticateToken,addReview);
router.get("/", getReview);

export default router;