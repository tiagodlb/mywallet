import { Router } from "express";

import { signIn, signUp, signOut } from "../controllers/authController.js";
import {
  validateSignIn,
  validateSignUp,
} from "../middlewares/validadeAuthMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUp, signUp);
authRouter.post("/signin", validateSignIn, signIn);
authRouter.get("/signout", signOut);

export default authRouter;
