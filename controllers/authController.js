import jwt from "jsonwebtoken";

const privatekey = process.env.JWT_SECRET

async function auth(req, res, next) {
    try {
        var token = jwt.sign(req.auth, privatekey)
        res.send({
            token: token
        })
    } catch(err) {
        next(err)
    }
}

export default {
    auth
}