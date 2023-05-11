import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import helmet from 'helmet'
import routes from './routes'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

export default app
