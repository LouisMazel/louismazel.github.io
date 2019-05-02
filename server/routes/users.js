const users = require('./../controllers/users')

const { authenticate } = require('../middleware/authenticate')
const { csrfCheck } = require('../middleware/csrfCheck')

module.exports = (app) => {
  app.post('/register', users.create);
  
  app.post('/login', users.login);
  
  app.get('/me', authenticate, users.find);
  
  app.delete('/me', authenticate, csrfCheck, users.delete);
  
  app.put('/logout', authenticate, csrfCheck, users.logout); 
}