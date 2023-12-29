import { Request, Response } from 'express'
import { log } from '../../logger'
import { IProduct } from '../../types/response/product'
import { errorResponse } from '../../lib/errors'

//const ProductsSchema = require('../../schema/products/ProductsSchema')
import { ProductsSchema } from '../../schema/products/ProductsSchema'

export const allProductsService = async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await ProductsSchema.find({}) // query mongo db
    if (products) {
      return res.status(200).json(products)
    }
  } catch (error: any) {
    log.error(`Error in Products Service: ${error}`)
    //errorResponse(res, error)
    return res.status(500).end()
  }
}
