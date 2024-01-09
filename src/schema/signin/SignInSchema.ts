import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { ISignIn } from '../../model/index'

const schema = new Schema<ISignIn>(
  {
    email: String,
    password: String
  },
  { collection: 'SHOPME_USERS' }
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

export const SignInSchema = mongoose.model('SignInModel', schema)
