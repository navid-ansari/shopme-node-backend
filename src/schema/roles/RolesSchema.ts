import mongoose, { Schema, model, connect, Types } from 'mongoose'
import { IRoles } from '../../types/response/roles'

const schema = new Schema<IRoles>(
  {
    label: String,
    value: String,
    code: Number
  },
  { collection: 'SHOPME_MASTER_ROLES' }
)

schema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id.toHexString() // transform id to hexstring(string) from mongoose id object
    delete ret._id // delete the _id property from the response
  }
})

// log duplicated id field in console.log() mehod
schema.set('toObject', { virtuals: true })

export const RolesSchema = mongoose.model('RolesModel', schema)
