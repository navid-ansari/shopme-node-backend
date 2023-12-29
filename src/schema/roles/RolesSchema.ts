import mongoose, { Schema, model, connect, Types } from 'mongoose'
import { IRoles } from '../../types/response/roles'

// es6 way
export const RolesSchema = mongoose.model<any>(
  'RolesModel',
  new mongoose.Schema({
    label: {
      type: String
    },
    value: {
      type: String
    },
    code: {
      type: Number
    }
  }),
  'SHOPME_MASTER_ROLES'
)

/*const RolesSchema = new Schema<IRoles>({
  label: {
    type: String
  },
  value: {
    type: String
  },
  code: {
    type: Number
  }
})*/

/*RolesSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id.toHexString() // transform id to hexstring(string) from mongoose id object
    delete ret._id // delete the _id property from the response
  }
})

// log duplicated id field in console.log() mehod
RolesSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model(
  'RolesModel',
  RolesSchema,
  'SHOPME_MASTER_ROLES'
)*/
