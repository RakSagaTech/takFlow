import express from "express";

import { registerUserController, loginUserController } from "../controllers/auth.controller.js";

const authRouter = express();


authRouter.post(
  "/register",
  registerUserController
);


authRouter.post(
  "login",
  loginUserController
)

export default authRouter;