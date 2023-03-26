import express from "express";
import personController from "../controllers/personController.js"


export const personRouter = express.Router();

personRouter.get('/getPerson',  personController.getPerson)

personRouter.use((err, req, res, next) => {
    res.status(400).send({ error: err.message })
})
