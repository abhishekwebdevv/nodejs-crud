import express from 'express'
import productsRoute from '../domains/products'

const router = express.Router()

router.use('/products', productsRoute)

export default router
