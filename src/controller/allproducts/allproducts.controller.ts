import { Request, Response } from 'express'
import { omit } from 'lodash'

// logger
import { log } from '../../logger'

// service
import { userList } from '../../service'
import { allProductsService } from '../../service/allproducts/allproducts.service'

export const allProductsController = async (req: Request, res: Response) => {
  try {
    const allProducts = await allProductsService(req, res)
    //console.log(users);
    return allProducts
    /*const omitPassword = users.every()
    omit(users.)*/
  } catch (e) {
    //log.error('Error In User List Controller')
  }
}
