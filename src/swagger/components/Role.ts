const Role = {
  label: {
    type: 'string',
    description: 'role label'
  },
  value: {
    type: 'string',
    description: 'role value'
  },
  code: {
    type: 'number',
    description: 'role code'
  }
}

const RoleExample = {
  label: 'User',
  vale: 'USER',
  code: 100
}

export { Role, RoleExample }
