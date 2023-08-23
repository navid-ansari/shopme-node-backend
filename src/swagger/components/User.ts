import { Role, RoleExample } from './Role'

const User = {
  username: {
    type: 'string',
    description: "user's username"
  },
  email: {
    type: 'string',
    description: 'unique email'
  },
  fname: {
    type: 'number',
    description: 'first name'
  },
  lname: {
    type: 'number',
    description: 'last name'
  },
  dob: {
    type: 'number',
    description: 'role code'
  },
  password: {
    type: 'number',
    description: 'password'
  },
  role: {
    type: 'array',
    description: 'user role',
    items: {
      type: 'object',
      properties: Role,
      example: RoleExample
    }
  }
}

const UserExample = {
  username: 'sample username',
  email: 'sampleemail@gmail.com',
  fname: 'sample first name',
  lname: 'sample last name',
  dob: '25-10-2000',
  password: 'uniquepassword',
  role: [RoleExample]
}

export { User, UserExample }
