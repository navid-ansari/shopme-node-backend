// app inititlized
import { createServer } from './src/initializer/create-server'

import { routes } from './src/routes/routes'

// logger
import { log } from './src/logger'

// mongo config
import { connectDB } from './src/config'

// swagger docs
import { swaggerDocs } from './src/swagger/swagger'

//import { NextFunction } from 'webpack-dev-middleware'

const app = createServer()
const PORT = process.env.PORT || 5001
app.listen(PORT, async () => {
  log.info(`server started on port ${PORT} with typescript`)
  await connectDB()
  //await routes(app)
  await swaggerDocs(app, Number(PORT))
  app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
})

module.exports = app

//module.exports = app
// export { app }
/**
// api routes
const testController = require('./routes/test/testController')
const userlistController = require('./routes/userlist/userlistController')
const menuController = require('./routes/menu/menuController')
const signupController = require('./routes/signup/signupController')
const signinController = require('./routes/signin/signinController')
const viewController = require('./routes/view/viewController')
const deleteController = require('./routes/delete/deleteController')
const editController = require('./routes/edit/editController')
const updateController = require('./routes/update/updateController')

// use routes
app.use('/api/test', testController)
app.use('/api/userlist', userlistController)
app.use('/api/menu', menuController)
app.use('/api/signup', signupController)
app.use('/api/signin', signinController)
app.use('/api/view', viewController)
app.use('/api/delete', deleteController)
app.use('/api/edit', editController)
app.use('/api/update', updateController)
 */
