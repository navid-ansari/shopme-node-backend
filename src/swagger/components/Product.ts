const Product = {
  id: {
    type: 'string',
    description: 'The auto-generated id of the product'
  },
  title: {
    type: 'string',
    description: 'Product title'
  },
  description: {
    type: 'string',
    description: 'Product description'
  },
  price: {
    type: 'string',
    description: 'Product price'
  },
  category: {
    type: 'string',
    description: 'Product category'
  },
  image: {
    type: 'string',
    description: 'Product image url'
  },
  rating: {
    type: 'object',
    description: 'The auto-generated id of the product',
    properties: {
      rate: {
        type: 'number',
        description: 'Product rating'
      },
      count: {
        type: 'number',
        description: 'Product total rating count'
      }
    }
  }
}

const ProductExample = {
  id: 12345,
  title: 'sample title',
  description: 'sample description',
  price: 3022,
  category: 'sample category',
  image: 'someurl.com/imagefolder/imagepath',
  rating: {
    rate: 3.2,
    count: 200
  }
}

export { Product, ProductExample }
