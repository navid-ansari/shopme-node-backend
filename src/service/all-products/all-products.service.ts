import { Request, Response } from 'express'
import { log } from '../../logger'
//import { omit } from 'lodash'

const ProductsSchema = require('../../schema/products/ProductsSchema')

//import { IUser } from '../../types/response/user'

export const allProductsService = async (req: Request, res: Response) => {
  try {
    const products = await ProductsSchema.find({}) // query mongo db
    if (products) {
      return res.status(200).json(products)
    }
  } catch (error: any) {
    log.error(`Error in Products Service: ${error}`)
    return res.status(500).end()
  }
}
