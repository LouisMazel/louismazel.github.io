
const contacts = require('./../controllers/contacts.js')

const { authenticate } = require('../middleware/authenticate')
const { csrfCheck } = require('../middleware/csrfCheck')

module.exports = (app) => {
  // Create a new contacts
  app.post('/contacts', contacts.create)

  // Retrieve all contacts
  app.get('/contacts', authenticate, contacts.findAll)

  // Retrieve a single Product with contactId
  app.get('/contacts/:contactId', authenticate, csrfCheck, contacts.find)

  // Update a Note with contactId
  app.put('/contacts/:contactId', authenticate, csrfCheck, contacts.update)

  // Delete a Note with contactId
  app.delete('/contacts/:contactId', authenticate, csrfCheck, contacts.delete)
}
