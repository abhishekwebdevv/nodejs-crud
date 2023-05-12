import { Request, Response } from 'express'

export async function getProducts(req: Request, res: Response) {
  try {
    console.log('Get Products')
  } catch (error: any) {
    console.log(error)
  }
}
