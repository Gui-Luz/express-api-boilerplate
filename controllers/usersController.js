import usersService from "../services/usersService.js"
import schemas from "../utils/validators/schemas.js"

async function getUsers(req, res, next) {
    try {
        const data = await usersService.usersService();
        res.send(data)
    } catch(err) {
        next(err)
    }
}

async function getUser(req, res, next) {
    try {
        const { error, value } = schemas.idSchema.validate({ id: req.params.id });
        if (!error) {
            const data = await usersService.userService(req.params.id);
            res.send(data)
            
        }else {
            res.status(400).json({ error: error.details[0].message });
        }
    } catch(err) {
        next(err)
    }
}

export default {
    getUsers,
    getUser
}