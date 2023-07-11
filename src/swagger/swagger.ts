import { Request, Response, Express } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'
import { log } from '../logger'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UMSR REST API Docs',
      version,
      description: 'A simple Express Library API'
    }
  },
  apis: ['../../routes.ts'] //'./usmr-backend/validation/*.ts'
}

const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app: Express) => {
  // swagger page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // docs in Json format
  app.get('/api-docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  //log.info(`Swagger docs available at http://localhost:${port}/api-docs`)
}

/*const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["./usmr-backend/routing/*.ts"],
};

const specs = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}*/

export { swaggerDocs }
