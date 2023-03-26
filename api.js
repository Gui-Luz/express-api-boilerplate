import express from "express";
import cors from "cors";

import { personRouter } from "./routes/personRouter.js";

const app = express();
app.use(express.json());
app.use(cors())

app.use('/person', personRouter);

app.listen(3000, () => {
    console.log("API listening on port 3000")
})