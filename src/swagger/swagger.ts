import { Request, Response, Express } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI, { SwaggerOptions } from 'swagger-ui-express'

// logger
import { log } from '../logger'
import { version } from '../../package.json'

const options: SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SHOPME API',
      version
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          schema: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/routes/routes.ts', './src/schema/*.ts']
}
const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app: Express, port: number) => {
  // swagger page
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

  // swagger docs in json
  app.get('api-docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type:', 'application/json')
    res.send(swaggerSpec)
  })
  log.info(`swagger api docs available at http://localhost:${port}/api-docs`)
}

export { swaggerDocs }
