import express from "express";
import usersController from "../controllers/usersController.js"
import jwt from "jsonwebtoken";

export const usersRouter = express.Router();

const privatekey = process.env.JWT_SECRET

usersRouter.use((req, res, next) => {
    next()
})

usersRouter.get('/', usersController.getUsers)
usersRouter.get('/:id', usersController.getUser)
usersRouter.post('/',  verifyJWT, usersController.postUser)
usersRouter.delete('/:id',  verifyJWT, usersController.deleteUser)
usersRouter.put('/:id',  verifyJWT, usersController.putUser)

function verifyJWT(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, privatekey);
    next()
}

usersRouter.use((err, req, res, next) => {
    res.status(400).send({ error: err.message })
})
