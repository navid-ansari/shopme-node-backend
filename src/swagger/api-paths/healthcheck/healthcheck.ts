const healthcheck = {
  tags: ['Healthcheck'],
  description: 'api to test healthcheck',
  responses: {
    '200': {
      description: 'OK => healthcheck status succes',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Healthcheck success. Server is up and running'
              }
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

export { healthcheck }
