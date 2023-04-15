import express from "express";
import basicAuth from "express-basic-auth";
import authController from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.use(basicAuth({
    authorizer: (username, password) => {
        if (username && password) {
            return true
        } else {
            return false
        }
    }
}))

authRouter.post('/',  authController.auth);
