import mongoose, { Schema, model, connect, Types } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  },
  {
    collection: 'SHOPME_ALL_PRODUCTS'
  }
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

export const ProductDetailsSchema = mongoose.model(
  'ProductDetailsModel',
  schema
)
