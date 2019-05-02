
const contacts = require('./../controllers/contacts.js')

const { authenticate } = require('../middleware/authenticate')
const { csrfCheck } = require('../middleware/csrfCheck')

module.exports = (app) => {
  // Create a new contacts
  app.post('/api/contacts', contacts.create)

  // Retrieve all contacts
  app.get('/api/contacts', authenticate, csrfCheck, contacts.findAll)

  // Retrieve a single Product with contactId
  app.get('/api/contacts/:contactId', authenticate, csrfCheck, contacts.find)

  // Update a Note with contactId
  app.put('/api/contacts/:contactId', authenticate, csrfCheck, contacts.update)

  // Delete a Note with contactId
  app.delete('/api/contacts/:contactId', authenticate, csrfCheck, contacts.delete)
}
