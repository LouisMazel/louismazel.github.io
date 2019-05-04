/* eslint-disable */
const nodemailer = require('nodemailer')
const { getSecret } = require('./../config')

const sendMail = async (payload) => {
	try {
		const { name, email, phone, message } = payload
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS: true,
			auth: getSecret('auth')
		})
	
		let mailOptions = {
			from: getSecret('auth').user,
			to: getSecret('auth').user,
			subject: `Nouvelle demande de contact : ${name} ${email}`,
			html: `
				<h1>Nouvelle demande de contact</h1>
				<br>
				<p>Nom : ${name}</p>
				<p>E-mail : ${email}</p>
				<p>Téléphone : ${phone}</p>
				<br>
				<p>Message : ${message}</p>
			`
		}
	
		await transporter.sendMail(mailOptions, (error, info) => {
			console.log('Email sent: ' + info.response)
		})
		
	} catch (error) {
		return console.log(error.message)
	}
}

module.exports = { sendMail }