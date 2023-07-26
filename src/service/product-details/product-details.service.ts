import { Request, Response } from 'express'

const ProductDetailsSchema = require('../../schema/product-details/ProductDetailsSchema')

import { log } from '../../logger'
import { IProduct } from '../../types/response/product'
import { errorResponse } from '../../lib/errors'

export const productDetailsService = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const product: IProduct = await ProductDetailsSchema.findById(id)
    if (product) {
      return res.status(200).json(product)
    }
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
  } catch (error: any) {
    log.error(`Error in Product Details Service: ${error}`)
    //errorResponse(res, error)
    return res.status(500).end()
  }
}
