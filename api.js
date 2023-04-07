import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./documentation/swaggerDocumentation.js"

import { usersRouter } from "./routes/usersRouter.js";
import { logger } from "./utils/logger/logger.js"

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', usersRouter);

app.listen(3000, () => {
    logger.info(`${new Date().toISOString()} API listening on port 3000`)
})