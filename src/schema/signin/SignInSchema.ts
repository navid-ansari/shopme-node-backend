import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { ISignIn } from '../../model/index'

const SignInSchema = new Schema<ISignIn>({
  email: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model<ISignIn>('SignInModel', SignInSchema, 'USERS')
