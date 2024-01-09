import mongoose, { model, connect, Types } from 'mongoose'

const { Schema } = mongoose

const schema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  },
  { collection: 'SHOPME_ALL_PRODUCTS' }
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

export const ProductsSchema = mongoose.model('ProductsModel', schema)
