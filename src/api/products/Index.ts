import { Request, Response } from 'express'
import Products, { Product } from '../../models/product-schema'

export default async function Index(req: Request, res: Response) {
  console.log(`Recieved a ${req.method} on ${req.url}`)

  switch (req.method) {
    case 'GET':
      try {
        const products = await Products.find({})
        console.log(products)
      } catch (error: any) {
        console.log(error)
      }
      break
    case 'POST':
      try {
        const product = new Products(req.body)
        product.save()
        res.status(201).send(product)
      } catch (error: any) {
        console.log(error.message)
      }
      break
    default:
      break
  }
}
