import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    trim: true,
    required: true,
  },
})

const ProductsModel = mongoose.model('product', productSchema)

export default ProductsModel
