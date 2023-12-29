import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { ISignIn } from '../../model/index'

// es6 way
export const SignInSchema = mongoose.model<any>(
  'SignInModel',
  new mongoose.Schema({
    email: {
      type: String
    },
    password: {
      type: String
    }
  }),
  'SHOPME_USERS'
)

/*const SignInSchema = new Schema<ISignIn>({
  email: {
    type: String
  },
  password: {
    type: String
  }
})*/

/* // duplicate _id to id field in model schema response
SignInSchema.virtual('id').get(function () {
  return this._id.toHexString()
})
SignInSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
  }
})

// log duplicated id field in console.log() mehod
SignInSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

module.exports = mongoose.model<ISignIn>(
  'SignInModel',
  SignInSchema,
  'SHOPME_USERS'
)*/
