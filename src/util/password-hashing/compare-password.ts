const bcrypt = require('bcrypt')

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const validatePassword = await bcrypt.compare(password, hash) // check user password with hashed password stored in the database
  return validatePassword
}
