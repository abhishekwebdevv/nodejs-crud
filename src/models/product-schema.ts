import mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface Product {
  id: string
  title: string
  code: string
  description: string
  rating: number
}

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

const products = mongoose.model('product', productSchema)

export default products
