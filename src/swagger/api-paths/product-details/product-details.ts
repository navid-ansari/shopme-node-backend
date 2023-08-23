import { Errors } from '../../components/Errors'
import { Product, ProductExample } from '../../components/Product'

const productDetails = {
  tags: ['Product Details'],
  parameters: [
    {
      in: 'path',
      name: 'id',
      schema: {
        type: 'string',
        required: true
      }
    }
  ],
  description: 'api to fetch product details',
  responses: {
    '200': {
      description: 'OK => product details fetched',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: Product,
            example: ProductExample
          }
        }
      }
    },
    '404': {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: Errors.PRODUCT_DETAILS.PRODUCT_NOT_FOUND,
            example: Errors.PRODUCT_DETAILS.PRODUCT_NOT_FOUND_EXAMPLE
          }
        }
      }
    },
    '500': {
      description: 'Internal Server Error'
    }
  }
}

export { productDetails }
