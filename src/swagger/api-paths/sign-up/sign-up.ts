import { Errors } from '../../components/Errors'
import { Product, ProductExample } from '../../components/Product'
import { User, UserExample } from '../../components/User'

const signUp = {
  tags: ['Sign Up'],
  description: 'api for new user registration',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: User,
          example: UserExample
        }
      }
    }
  },
  responses: {
    '201': {
      description: 'Created => Creates new user',
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
      description: 'Not Found'
    },
    '422': {
      description: 'Unprocessable Entity => Email id already exist',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: Errors.SIGN_UP.EMAIL_EXISTS,
            example: Errors.SIGN_UP.EMAIL_EXISTS_EXAMPLE
          }
        }
      }
    },
    '500': {
      description: 'Internal Server Error'
    }
  }
}

export { signUp }
