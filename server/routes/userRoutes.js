import express from "express";
import {
  createReview,
  createCalendar,
  createPayment,
} from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.post("/review", createReview);
userRouter.post("/calendar", createCalendar);
userRouter.post("/payment", createPayment);

export default userRouter;
