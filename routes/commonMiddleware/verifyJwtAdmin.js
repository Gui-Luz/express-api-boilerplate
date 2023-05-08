import { JWT_SECRET } from "../../utils/env/env.js";
import jwt from 'jsonwebtoken'

export function verifyJWTAdmin (req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1]
		const decodedToken = jwt.verify(token, JWT_SECRET)
		req.user = decodedToken
        if (req.user.role === 'admin') {
            next()
        } else {
            throw new Error ('Permission denied')
        }
	} catch(err) {
		throw new Error ('Permission denied')
	}
};