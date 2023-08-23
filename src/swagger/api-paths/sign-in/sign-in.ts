import { Credentials, CredentialsExample } from '../../components/Credentials'
import { Errors } from '../../components/Errors'
import { Product, ProductExample } from '../../components/Product'

const signIn = {
  tags: ['Sign In'],
  description: 'api for user login',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: Credentials,
          example: CredentialsExample
        }
      }
    }
  },
  responses: {
    '200': {
      description: 'OK => user is autheticated and logged in',
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
    '401': {
      description: 'Unauthorized => Incorrect password',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: Errors.SIGN_IN.INCORRECT_PASSWORD,
            example: Errors.SIGN_IN.INCORRECT_PASSWORD_EXAMPLE
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

export { signIn }
