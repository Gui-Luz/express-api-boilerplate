import express from "express";
import usersController from "../controllers/usersController.js"


export const usersRouter = express.Router();

usersRouter.get('/getUsers',  usersController.getUsers)
usersRouter.get('/getUser/:id',  usersController.getUser)

usersRouter.use((err, req, res, next) => {
    res.status(400).send({ error: err.message })
})
