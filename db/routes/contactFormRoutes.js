var express = require('express')
var app = express()
var contactFormRoutes = express.Router()

// Require ContactForm model in our routes module
var ContactForm = require('../models/ContactForm')

// Defined store route
contactFormRoutes.route('/add').post((req, res) => {
  var item = new ContactForm(req.body)
      item.save()
    .then(item => res.status(200).json({'item': 'Item added successfully'}))
    .catch(err => res.status(400).send("unable to save to database"))
})

// Defined get data(index or listing) route
contactFormRoutes.route('/').get((req, res) => {
  ContactForm.find((err, items) => {
    if (err) console.log(err)
    else res.json(items)
  })
})

// Defined edit route
contactFormRoutes.route('/edit/:id').get((req, res) => {
  var id = req.params.id
  ContactForm.findById(id, (err, item) => res.json(item))
})

//  Defined update route
contactFormRoutes.route('/update/:id').post((req, res) => {
  ContactForm.findById(req.params.id, (err, item) => {
    if (!item) return next(new Error('Could not load Document'))
    else {
      item.name = req.body.name
      item.price = req.body.price

      item.save().then(item => res.json('Update complete'))
      .catch(err => res.status(400).send("unable to update the database"))
    }
  })
})

// Defined delete | remove | destroy route
contactFormRoutes.route('/delete/:id').get((req, res) => {
  ContactForm.findByIdAndRemove(
    {_id: req.params.id},
    (err, item) => {
      if (err) res.json(err)
      else res.json('Successfully removed')
    })
})

module.exports = contactFormRoutes