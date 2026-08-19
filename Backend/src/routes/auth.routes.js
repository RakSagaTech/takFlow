import express from "express";


import { registerSchema, loginSchema } from "../validations/form.validation.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerUserController, loginUserController } from "../controllers/auth.controller.js";

const authRouter = express();


authRouter.post(
  "/register",
  validate(registerSchema),
  registerUserController
);


authRouter.post(
  "login",
  validate(loginSchema),
  loginUserController
)

export default authRouter;