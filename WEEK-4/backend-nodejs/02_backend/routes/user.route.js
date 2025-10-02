import router from "express";

import {
  registerUser,
  loginUser,
  logout,
  verifyUser,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controller.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const userRouter = router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/logout", isLoggedIn, logout);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

export default userRouter;
