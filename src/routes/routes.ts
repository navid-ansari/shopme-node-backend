import { Express, Request, Response } from 'express'

// logger
import { log } from '../logger'

// validation
import { validateReq } from '../middleware'

//
import { signInSchema } from '../validation'

import {
  healthcheckController,
  getMenuHandler,
  signInHandler,
  signUpHandler,
  userListHandler,
  viewUserHandler,
  editUserHandler,
  updateUserHandler,
  deleteUserHandler,
  allProductsController,
  productDetailsController
} from '../controller'

const routes = (app: Express) => {
  // menu
  app.get('/api/menu', getMenuHandler)

  /*app.post('/api/signup', validateReq(signInSchema), createSignUpHandler)*/

  // sign in
  app.post('/api/signin', signInHandler) //validateReq(signInSchema),

  // sign up
  app.post('/api/signup', signUpHandler)

  // user list
  app.get('/api/userList', userListHandler)

  // view
  app.get('/api/view/:id', viewUserHandler)

  // edit
  app.get('/api/edit', editUserHandler)

  // edit
  app.put('/api/updateuser/:id', updateUserHandler)

  // delete
  app.delete('/api/delete/:id', deleteUserHandler)

  // healthcheck
  /**
   * @openapi
   * /api/healthcheck:
   *   get:
   *    tags:
   *    - Healthcheck Test
   *    description: Responds if the app is up and running
   *    responses:
   *     200:
   *      description: Healthcheck success. Server is up and running
   */
  app.get('/api/healthcheck', healthcheckController)

  // get all products
  /**
   * @openapi
   * /api/allproducts:
   *  get:
   *     tags:
   *     - All Products
   *     description: Responds if all products are fetched
   *     responses:
   *       200:
   *         description: All products fetched
   */
  app.get('/api/allproducts', allProductsController)

  // get product details by id
  /**
   * @openapi
   * /api/productDetails/:id:
   *  get:
   *     tags:
   *     - Product details
   *     description: Responds if product details are fetched
   *     responses:
   *       200:
   *         description: Fetches product details
   */
  app.get('/api/productDetails/:id', productDetailsController)
}

export { routes }
