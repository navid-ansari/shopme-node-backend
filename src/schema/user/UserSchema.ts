import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { IUser } from '../../model'

const UserSchema = new Schema<IUser>({
  username: {
    type: String
  },
  email: {
    type: String
  },
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  dob: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: []
  }
})

module.exports = mongoose.model<IUser>('UserModel', UserSchema, 'USERS')
