import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import helmet from 'helmet'
import { connectDB } from './db/mongodb'

import productsApi from './api/products/Index'

dotenv.config()

if (!process.env.PORT) {
  console.log('Error in fetching port')
  process.exit(1)
}

const port: number = parseInt(process.env.PORT as string, 10)

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log('Listening on port ' + port)
  connectDB()
})

// app.get('/products', (req, res) => res.status(200).send({ msg: 'Successful' }))
app.all('/products', productsApi)
// app.post('/products', createProduct)
// app.post('/update-product', updateProduct)
// app.post('/delete-product', deleteProduct)
