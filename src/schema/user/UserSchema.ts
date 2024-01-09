import mongoose, { Schema, model, connect, Types } from 'mongoose'

import { IUser } from '../../model'

const schema = new Schema(
  {
    username: String,
    email: String,
    fname: String,
    lname: String,
    dob: String,
    password: String,
    role: Array
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

export const UserSchema = mongoose.model('UserModel', schema)
