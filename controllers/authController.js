import jwt from "jsonwebtoken";

const privatekey = 'key'

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