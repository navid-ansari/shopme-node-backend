import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { IUser } from '../../model'

// es6 way
export const UserSchema = mongoose.model<any>(
  'UserModel',
  new mongoose.Schema({
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
  }),
  'SHOPME_USERS'
)

/*const UserSchema = new Schema<IUser>({
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
})*/

/*// duplicate _id to id field in model schema response
UserSchema.virtual('id').get(function () {
  return this._id.toHexString()
})
UserSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
  }
})

// log duplicated id field in console.log() mehod
UserSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model<IUser>('UserModel', UserSchema, 'SHOPME_USERS')*/
