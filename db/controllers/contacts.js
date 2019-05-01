const Contacts = require('./../models/Contacts.js')

// Create new Contact
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: 'Contact content can not be empty'
        })
    }
    // Create a Contact
    const contact = new Contacts({
        name: req.body.name, 
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })

    // Save Contact in the database
    contact.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Something wrong while creating the contact.'
        })
    })
}

// Retrieve all contacts from the database.
exports.findAll = (req, res) => {
    Contacts.find()
    .then(contacts => {
        res.send(contacts)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Something wrong while retrieving contacts.'
        })
    })
}

// Find a single contact with a contactId
exports.findOne = (req, res) => {
    Contacts.findById(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })            
        }
        res.send(contact)
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })                
        }
        return res.status(500).send({
            message: 'Something wrong retrieving contact with id ' + req.params.contactId
        })
    })
}

// Update a contact
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: 'Contact content can not be empty'
        })
    }

    // Find and update contact with the request body
    Contacts.findByIdAndUpdate(req.params.contactId, {
        name: req.body.name || 'No contact name', 
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    }, {new: true})
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })
        }
        res.send(contact)
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })                
        }
        return res.status(500).send({
            message: 'Something wrong updating note with id ' + req.params.contactId
        })
    })
}

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Contacts.findByIdAndRemove(req.params.contactId)
    .then(contact => {
        if(!contact) {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })
        }
        res.send({message: 'Contact deleted successfully!'})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: 'Contact not found with id ' + req.params.contactId
            })                
        }
        return res.status(500).send({
            message: 'Could not delete contact with id ' + req.params.contactId
        })
    })
}