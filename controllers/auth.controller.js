/* eslint-disable no-tabs */
import jwt from 'jsonwebtoken'

const privatekey = process.env.JWT_SECRET

async function auth (req, res, next) {
	try {
		const payload = {
			id: req.user.id,
			username: req.user.username,
			firsName: req.user.first_name,
			lastName: req.user.last_name,
			email: req.user.email,
			role: req.user.role
		}
		const token = jwt.sign(payload, privatekey)
		res.send({
			token
		})
	} catch (err) {
		next(err)
	}
}

export default {
	auth
}
