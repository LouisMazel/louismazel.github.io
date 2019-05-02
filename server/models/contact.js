const mongoose = require('mongoose')

const Contact = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: String,
	message: {
		type: String,
		required: true
	},
	readed: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('Contact', Contact)