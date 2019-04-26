const mongoose = require('mongoose')

const ContactFormSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {
    timestamps: true
})

module.exports = mongoose.model('ContactForm', ContactFormSchema)