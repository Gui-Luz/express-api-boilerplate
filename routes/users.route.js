import express from 'express'
import usersController from '../controllers/users.controller.js'
import { verifyJWT } from './commonMiddleware/verifyJwt.js'
import { verifyJWTAdmin } from './commonMiddleware/verifyJWTAdmin.js'

export const usersRoute = express.Router()

usersRoute.use((req, res, next) => {
	next()
})

usersRoute.post('/', usersController.postUser)
usersRoute.get('/:id', verifyJWT, usersController.getUser)
usersRoute.delete('/:id', verifyJWT, usersController.deleteUser)
usersRoute.put('/:id', verifyJWT, usersController.putUser)
usersRoute.get('/', verifyJWTAdmin, usersController.getUsers)

usersRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})
