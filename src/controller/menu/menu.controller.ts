import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { getMenu } from '../../service'

export const getMenuHandler = async (req: Request, res: Response) => {
  //log.info('Menu Controller Working')
  try {
    return await getMenu(req, res)
  } catch (e) {
    //log.error('Error In Menu Controller')
  }
}
