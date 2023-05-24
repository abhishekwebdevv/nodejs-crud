import { Request, Response } from 'express'
import ProductsModel from './model'
import mongoose from 'mongoose'
import { Product } from './types'

export async function getProducts(req: Request, res: Response) {
  try {
    const products: Product[] = await ProductsModel.find({})

    res.status(200).send(products)
  } catch (error: any) {
    console.log(error)
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { productId } = req.params
    const product = await findProductById(productId)
    if (!product) {
      res.status(404).send({
        msg: 'Product not found',
      })

      return
    }

    console.log(product)

    res.status(200).send(product)
  } catch (error: any) {
    console.log(error)
  }
}

export async function addProduct(req: Request, res: Response) {
  try {
    const product = new ProductsModel(req.body)
    await product.save()

    res.status(201).send({
      msg: 'Product Added Successfully',
    })
  } catch (error: any) {
    console.log(error)
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params
    const product = await findProductById(productId)
    if (!product) {
      res.status(404).send({
        msg: 'Product not found',
      })

      return
    }

    await ProductsModel.findByIdAndDelete(productId)
    res.status(200).send({ msg: 'Product deleted successfully' })
  } catch (error) {
    console.log(error)
  }
}

export async function updateProductById(req: Request, res: Response) {
  try {
    const { productId } = req.params
    const product = await findProductById(productId)
    if (!product) {
      res.status(404).send({
        msg: 'Product not found',
      })

      return
    }

    await ProductsModel.findByIdAndUpdate(productId, req.body)
    res.status(200).send({ msg: 'Product updated successfully' })
  } catch (error) {
    console.log(error)
  }
}

// methods
const findProductById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null
  }

  const product = await ProductsModel.findById(id)
  return product
}
