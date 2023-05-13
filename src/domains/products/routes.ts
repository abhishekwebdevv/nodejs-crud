import express from 'express'
import {
  addProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProductById,
} from './controller'

const router = express.Router()

router.get('', getProducts)
router.get('/:productId', getProductById)
router.post('', addProduct)
router.delete('/:productId', deleteProduct)
router.patch('/:productId', updateProductById)

export default router
