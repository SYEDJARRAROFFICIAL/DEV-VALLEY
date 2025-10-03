import router from "express";

import {
  registerUser,
  loginUser,
  logout,
  verifyUser,
  forgotPassword,
  resetPassword,
  allUsers,
  deleteUser,
  updateUserRole,
} from "../controllers/user.controller.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { isAdmin } from "../middlewares/isAdmin.js";
const userRouter = router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/logout", isLoggedIn, logout);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password/:token", resetPassword);

// Only admin can access this route
userRouter.get("/all", isLoggedIn, isAdmin, allUsers);
userRouter.delete("/delete/:id", isLoggedIn, isAdmin, deleteUser);
userRouter.put("/update-role/:id", isLoggedIn, isAdmin, updateUserRole);
export default userRouter;
