import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { IMenu } from '../../model/menu.model'

// es6 way: working
/*const MenuSchema = mongoose.model<any>(
  'MenuModel',
  new mongoose.Schema({
    menuId: {
      type: Number
    },
    menuName: {
      type: String
    },
    manuLabel: {
      type: String
    },
    childMenu: {
      type: []
    },
    menuPath: {
      type: String
    }
  }),
  'NAV_MENU'
)
export { MenuSchema }*/

// module way
const MenuSchema = new Schema<any>({
  menuId: {
    type: Number
  },
  menuName: {
    type: String
  },
  manuLabel: {
    type: String
  },
  childMenu: {
    type: []
  },
  menuPath: {
    type: String
  }
})
module.exports = mongoose.model('MenuModel', MenuSchema, 'NAV_MENU')

// es6 way: not working
/*const MenuSchema = new Schema<any>({
  menuId: {
    type: Number
  },
  menuName: {
    type: String
  },
  manuLabel: {
    type: String
  },
  childMenu: {
    type: []
  },
  menuPath: {
    type: String
  }
})

export default mongoose.model<any>('MenuModel', MenuSchema, 'NAV_MENU')*/
