import { Role, RoleExample } from '../../components/Role'

const rolesMaster = {
  tags: ['Roles Master'],
  description: 'api to fetch user roles',
  responses: {
    '200': {
      description: 'OK => fetch user roles',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: Role,
              example: RoleExample
            }
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

export { rolesMaster }
