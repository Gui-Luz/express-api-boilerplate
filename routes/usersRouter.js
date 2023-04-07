import express from "express";
import usersController from "../controllers/usersController.js"


export const usersRouter = express.Router();

usersRouter.get('/',  usersController.getUsers)
usersRouter.get('/:id',  usersController.getUser)
usersRouter.post('/',  usersController.postUser)
usersRouter.delete('/:id',  usersController.deleteUser)
usersRouter.put('/:id',  usersController.putUser)


usersRouter.use((err, req, res, next) => {
    res.status(400).send({ error: err.message })
})
