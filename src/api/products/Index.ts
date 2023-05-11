import { Request, Response } from 'express'
import products, { Product } from '../../models/product-schema'

export default function Index(req: Request, res: Response) {
  switch (req.method) {
    case 'GET':
      console.log('GET request')

      break
    case 'POST':
      console.log('POST request')
      break
    default:
      break
  }
}
