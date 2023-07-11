const bcrypt = require('bcrypt')

export const hashPassword = async (password: string) => {
  // generate salt to hash password
  const salt = await bcrypt.genSalt(Number(process.env.SALT))

  // now we set user password to hashed password
  const encryptedPassword = await bcrypt.hash(password, salt)
  return encryptedPassword
}
