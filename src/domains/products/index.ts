import express from 'express'
const router = express.Router()
import productRouter from './routes'

router.use(productRouter)

export default router
