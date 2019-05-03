const users = require('./../controllers/users')

const { authenticate } = require('../middleware/authenticate')
const { csrfCheck } = require('../middleware/csrfCheck')

module.exports = (app) => {
	app.post('/api/auth/register', users.create)
  
	app.post('/api/auth/login', users.login)
  
	app.get('/api/auth/me', authenticate, users.find)
  
	app.delete('/api/auth/me', authenticate, csrfCheck, users.delete)
  
	app.put('/api/auth/logout', authenticate, users.logout) 
}