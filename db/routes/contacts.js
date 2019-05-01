
module.exports = (app) => {
  const contacts = require('./../controllers/contacts.js');

  // Create a new Product
  app.post('/contacts', contacts.create);

  // Retrieve all contacts
  app.get('/contacts', contacts.findAll);

  // Retrieve a single Product with contactId
  app.get('/contacts/:contactId', contacts.findOne);

  // Update a Note with contactId
  app.put('/contacts/:contactId', contacts.update);

  // Delete a Note with contactId
  app.delete('/contacts/:contactId', contacts.delete);
}
