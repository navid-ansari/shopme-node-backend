import mongoose, { Schema, model, connect, Types } from 'mongoose'

// es6 way
export const ProductsSchema = mongoose.model<any>(
  'ProductsModel',
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

/*const ProductsSchema = new Schema<any>({
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

// duplicate _id to id field in model schema response => do not uncomment, not using
/*ProductsSchema.virtual('id').get(function () {
  return this._id.toHexString()
})*/
/*ProductsSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id.toHexString() // transform id to hexstring(string) from mongoose id object
    delete ret._id // delete the _id property from the response
  }
})

// log duplicated id field in console.log() mehod
ProductsSchema.set('toObject', { virtuals: true })

module.exports = mongoose.model(
  'ProductsModel',
  ProductsSchema,
  'SHOPME_ALL_PRODUCTS'
)*/
