import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { IMenu } from '../../model/menu.model'

const schema = new Schema<IMenu>(
  {
    menuId: Number,
    menuName: String,
    menuLabel: String,
    childMenu: Array,
    menuPath: String
  },
  { collection: 'NAV_MENU' }
)

export const MenuSchema = mongoose.model('MenuModel', schema)
