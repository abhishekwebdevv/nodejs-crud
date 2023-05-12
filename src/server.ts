import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import helmet from 'helmet'
import routes from './routes'
import { connectDB } from './config/mongodb'

const port = process.env.PORT || 8080

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log('Listening on port ' + port)
  connectDB()
})

export default app
