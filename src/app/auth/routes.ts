import express from "express";
import type { Router } from "express";
import AuthenticationControlller from "./controlller";

const authenticationController = new AuthenticationControlller()

export const authRouter:Router = express.Router();


authRouter.post('/sign-up',authenticationController.handleSignup.bind(authenticationController));
authRouter.post('/sign-in', authenticationController.handleSignin.bind(authenticationController));
