import { version } from '../../package.json'
import { allProducts } from './api-paths/all-products/all-products'

import { healthcheck } from './api-paths/healthcheck/healthcheck'
import { productDetails } from './api-paths/product-details/product-details'
import { rolesMaster } from './api-paths/roles/roles'
import { signIn } from './api-paths/sign-in/sign-in'
import { signUp } from './api-paths/sign-up/sign-up'

const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'SHOPME API Docs',
    version
  },
  components: {
    /*securitySchemas: {
        bearerAuth: {      
          type: 'http',
          schema: 'bearer',
          bearerFormat: 'JWT'
        }
      }*/
  },
  tags: [
    {
      name: 'Healthcheck'
    },
    {
      name: 'All Products'
    },
    {
      name: 'Product Details'
    },
    {
      name: 'Sign Up'
    },
    {
      name: 'Sign In'
    },
    {
      name: 'Roles Master'
    }
  ],
  paths: {
    '/api/healthcheck': {
      get: healthcheck
    },
    '/api/allproducts': {
      get: allProducts
    },
    '/api/productDetails/{id}': {
      get: productDetails
    },
    '/api/signup': {
      post: signUp
    },
    '/api/signin': {
      post: signIn
    },
    '/api/roles': {
      get: rolesMaster
    }
  }
}

export { swaggerDocumentation }
