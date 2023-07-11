import { Request, Response } from 'express'
import { omit } from 'lodash'

// logger
import { log } from '../../logger'

// service
//import { userList } from '../../service'
import { productDetailsService } from '../../service/product-details/product-details.service'

export const productDetailsController = async (req: Request, res: Response) => {
  try {
    const productDetails = await productDetailsService(req, res)
    //console.log(users);
    return productDetails
    /*const omitPassword = users.every()
    omit(users.)*/
  } catch (e) {
    //log.error('Error In User List Controller')
  }
}
