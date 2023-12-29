import mongoose, { Schema, model, connect, Types } from 'mongoose'

/*const ProductDetailsSchema = new Schema<any>({
  title: {
    type: String
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
  rating: {
    rate: {
      type: Number
    },
    count: {
      type: Number
    }
  }
})*/

// es6 way
export const ProductDetailsSchema = mongoose.model<any>(
  'ProductDetailsModel',
  new mongoose.Schema({
    title: {
      type: String
    },
    price: {
      type: Number
    },
    description: {
      type: String
    },
    category: {
      type: String
    },
    image: {
      type: String
    },
    rating: {
      rate: {
        type: Number
      },
      count: {
        type: Number
      }
    }
  }),
  'SHOPME_ALL_PRODUCTS'
)

/*// duplicate _id to id field in model schema response
ProductDetailsSchema.virtual('id').get(function () {
  return this._id.toHexString()
})
ProductDetailsSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
  }
})

// log duplicated id field in console.log() mehod
ProductDetailsSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model(
  'ProductDetailsModel',
  ProductDetailsSchema,
  'SHOPME_ALL_PRODUCTS'
)*/
