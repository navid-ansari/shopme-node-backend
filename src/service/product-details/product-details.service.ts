import { Request, Response } from 'express'
//import { omit } from 'lodash'

const ProductDetailsSchema = require('../../schema/product-details/ProductDetailsSchema')

import { log } from '../../logger'

//import { IUser } from '../../types/response/user'

export const productDetailsService = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const product = await ProductDetailsSchema.findById(id)
    if (product) {
      return res.status(200).json(product)
    }
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
  } catch (error: any) {
    log.error(`Error in Product Details Service: ${error}`)
    return res.status(500).end()
  }
}
