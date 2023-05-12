import express from 'express'
import { getProducts } from './controller'

const router = express.Router()

router.get('', getProducts)

export default router
