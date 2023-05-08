import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger/logger.js'
import { swaggerDocument } from './documentation/swagger.documentation.js'
import { usersRoute } from './routes/users.route.js'
import { authRouter } from './routes/auth.route.js'

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/auth', authRouter)
app.use('/users', usersRoute)

app.listen(3000, () => {
    try {
      logger.info(`${new Date().toISOString()} API listening on port 3000`)
    } catch(err) {
      logger.warning(err)
    } 
  })