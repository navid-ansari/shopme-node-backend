import { Express, Request, Response } from 'express'

// logger
import { log } from '../logger'

// validation
import { validateReq } from '../middleware'

//
import { signInSchema } from '../validation'

import {
  healthcheckController,
  allProductsController,
  productDetailsController,
  getMenuHandler,
  signInController,
  signUpController,
  userListHandler,
  viewUserHandler,
  editUserHandler,
  updateUserHandler,
  deleteUserHandler,
  rolesController
} from '../controller'

const routes = (app: Express) => {
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
   *      content:
   *       application/json:
   *        schema:
   *         $ref: '#/components/schemas/Healthcheck'
   *     404:
   *      description: Not Found
   *     500:
   *      description: Internal Server Error
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
   *        description: All products fetched
   *        content:
   *         application/json:
   *          schema:
   *           type: array
   *           items:
   *            $ref: '#/components/schemas/Product'
   *       404:
   *        description: Not Found
   *       500:
   *        description: Internal Server Error
   */
  app.get('/api/allproducts', allProductsController)

  // get product details by id
  /**
   * @openapi
   * /api/productDetails/{id}:
   *  get:
   *     tags:
   *     - Product Details
   *     parameters:
   *      - in: path
   *        name: id
   *        schema:
   *         type: string
   *        required: true
   *     description: Responds if product details are fetched
   *     content:
   *      application/json:
   *       schema:
   *        type: object
   *     responses:
   *       200:
   *        description: Fetches product details
   *        content:
   *         application/json:
   *          schema:
   *           $ref: '#/components/schemas/Product'
   *       404:
   *        description: Product not found
   *        content:
   *         application/json:
   *          schema:
   *           $ref: '#/components/schemas/Product404'
   *       500:
   *        description: Internal Server Error
   */
  app.get('/api/productDetails/:id', productDetailsController)

  // menu
  app.get('/api/menu', getMenuHandler)

  //app.post('/api/signup', validateReq(signInSchema), createSignUpHandler)

  // roles master
  /**
   * @openapi
   * /api/roles:
   *  get:
   *     tags:
   *     - Roles Master
   *     description: Responds if roles master list is fetched
   *     responses:
   *       200:
   *        description: Fetches roles master list
   *        content:
   *         application/json:
   *          schema:
   *           type: array
   *           items:
   *            $ref: '#/components/schemas/Roles'
   *       500:
   *        description: Internal Server Error
   */
  app.get('/api/roles', rolesController)

  // sign up
  app.post('/api/signup', signUpController)

  // sign in
  app.post('/api/signin', signInController) //validateReq(signInSchema),

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
}

/**
 * @openapi
 * components:
 *  schemas:
 *   Healthcheck:
 *    type: object
 *    properties:
 *     message:
 *      type: string
 *      description: Healthcheck success message
 *    example:
 *     message: sample server healthcheck running message
 *   Product:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: The auto-generated id of the product
 *     title:
 *      type: string
 *      description: Product title
 *     description:
 *      type: string
 *      description: Product description
 *     price:
 *      type: number
 *      description: Product price
 *     category:
 *      type: string
 *      description: Product category
 *     image:
 *      type: string
 *      description: Product image
 *     rating:
 *      type: object
 *      properties:
 *       rate:
 *        type: number
 *        description: Product rating
 *       count:
 *        type: number
 *        description: Product total rating count
 *    example:
 *     id: 12345
 *     title: sample title
 *     description: sample description
 *     price: 3022
 *     category: sample category
 *     image: someurl.com/imagefolder/imagepath
 *     rating:
 *       rate: 3.2
 *       count: 200
 *   Product404:
 *    type: object
 *    properties:
 *     message:
 *      type: string
 *      description: Product not found error message
 *    example:
 *     message: Product not found
 *   Roles:
 *    type: object
 *    properties:
 *     label:
 *      type: string
 *      description: role label
 *     value:
 *      type: string
 *      description: role value
 *     code:
 *      type: number
 *      description: role code
 *    example:
 *     label: sample role label
 *     value: sample role value
 *     code: 100
 */

export { routes }
