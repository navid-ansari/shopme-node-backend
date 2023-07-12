import { Express, Request, Response } from 'express'

// logger
import { log } from '../logger'

// validation
import { validateReq } from '../middleware'

//
import { signInSchema } from '../validation'

import {
  testApiHandler,
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

/**
 * @swagger
 * components:
 *   schemas:
 *     LogIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User email id
 *         password:
 *           type: string
 *           description: User Password
 *       example:
 *         email: prashant@yahoo.com
 *         password: prashant
 *
 *     LogInSuccess:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Request success
 *         data:
 *           type: object
 *           description: Error from mongoDB
 *         message:
 *           type: string
 *           description: Error message
 *       example:
 *         success: prashant@yahoo.com
 *         data: {
 *          "_id": "623f693562855cb3c0975bc9",
 *          "username": "prash_raut",
 *          "email": "prashant@yahoo.com",
 *          "fname": "Prashant",
 *          "lname": "Raut",
 *          "dob": "14-06-1986",
 *          "password": "prashant",
 *          "role": [
 *              {
 *                  "label": "User",
 *                  "value": "USER",
 *                  "code": 100
 *              },
 *              {
 *                  "label": "Admin",
 *                  "value": "ADMIN",
 *                  "code": 101
 *              }
 *          ],
 *          "__v": 0
 *         }
 *         message: User Logged In
 *
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Autogenerated user id
 *         username:
 *           type: string
 *           description: Chosen Username
 *         email:
 *           type: string
 *           description: User email id
 *         fname:
 *           type: string
 *           description: First name of the user
 *         lname:
 *           type: string
 *           description: Last name of the user
 *         dob:
 *           type: string
 *           description: Date of birth of user
 *         password:
 *           type: string
 *           description: User password
 *         __v:
 *           type: number
 *           description: Version
 *         role:
 *           type: Array
 *           description: User role
 *       example:
 *         _id: 623f693562855cb3c0975bc9
 *         username: prash_raut
 *         email: prashant@yahoo.com
 *         fname: Prashant
 *         lname: Raut
 *         dob: 14-06-1986
 *         password: prashant
 *         role: [{label: "User", value: "USER", code: 100}, {label: "Admin", value: "ADMIN", code: 101}]
 *         __v: 0
 *
 */

const routes = (app: Express) => {
  /**
   * @swagger
   * tags:
   *   name: Test
   *   description: The books managing API
   */

  /**
   * @swagger
   * /api/test:
   *   get:
   *     summary: Returns the list of all the books
   *     tags: [Test]
   *     responses:
   *       200:
   *         description: The list of the books
   *         content:
   *           application/json:
   *              schema:
   *               type: object
   */
  app.get('/api/test', testApiHandler)

  // menu
  /**
   * @swagger
   * /api/menu:
   *   get:
   *     summary: Returns the navigation menu
   *     tags: [Menu]
   *     responses:
   *       200:
   *         description: The list of the menu
   *         content:
   *           application/json:
   *              schema:
   *               type: object
   */
  app.get('/api/menu', getMenuHandler)

  // sign up
  /**
   * @swagger
   * /api/signup:
   *  post:
   *      summary: Logs in user after validation
   *      tags: [Sign Up]
   *      requestBody:
   *          content:
   *              application/json:
   *                  schema:
   *                      $ref: '#/components/schemas/LogIn'
   *      responses:
   *          200:
   *              description: User is successfully logged in
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/User'
   *          500:
   *              description: Some server error
   */
  /*app.post('/api/signup', validateReq(signInSchema), createSignUpHandler)*/

  // sign in
  /**
   * @swagger
   * /api/signin:
   *  post:
   *      summary: Logs in user after validation
   *      tags: [Sign In]
   *      requestBody:
   *          content:
   *              application/json:
   *                  schema:
   *                      $ref: '#/components/schemas/LogIn'
   *      responses:
   *          200:
   *              description: User is successfully logged in
   *              content:
   *                  application/json:
   *                      schema:
   *                          $ref: '#/components/schemas/LogInSuccess'
   *          500:
   *              description: Some server error
   */
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

  // get all products
  app.get('/api/allproducts', allProductsController)

  // get product details by id
  app.get('/api/productDetails/:id', productDetailsController)
}
export { routes }
