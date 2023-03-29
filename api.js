import express from "express";
import cors from "cors";

import { usersRouter } from "./routes/usersRouter.js";

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log(`${new Date().toISOString()} API listening on port 3000`)
})