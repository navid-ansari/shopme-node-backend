import jwt from 'jsonwebtoken'

const privateKey = process.env.JWT_PRIVATE_KEY
/*export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
  jwt.sign(object, privateKey, options)
}*/
