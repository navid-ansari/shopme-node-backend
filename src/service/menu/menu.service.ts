import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

// logger
import { log } from '../../logger'

// model
import { IMenu } from '../../model'

// schema
//const MenuSchema = require('../../schema/menu/MenuSchema')
import { MenuSchema } from '../../schema/menu/MenuSchema'

export const getMenu = async (req: Request, res: Response) => {
  //log.info('Menu Service Working')
  try {
    const menu = await MenuSchema.find({}) // query mongo db
    //console.log(menu)
    if (menu) {
      return res.status(200).json({ data: menu })
    }
  } catch (e) {
    //console.log(e)
  }
}
