import { Product, ProductExample } from '../../components/Product'

const allProducts = {
  tags: ['All Products'],
  description: 'api to fetch all the products',
  responses: {
    '200': {
      description: 'OK => all products fetched',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: Product,
              example: ProductExample
            }
          }
        }
      }
    },
    '404': {
      description: 'Not Found'
    },
    '500': {
      description: 'Internal Server Error'
    }
  }
}

export { allProducts }
