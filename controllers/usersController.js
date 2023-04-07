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
            const data = await usersService.userGetService(req.params.id);
            res.send(data)
            
        }else {
            res.status(400).json({ error: error.details[0].message });
        }
    } catch(err) {
        next(err)
    }
}

async function postUser(req, res, next) {
    try {
        const { error, value } = schemas.userSchema.validate({ firstName: req.body.firstName,
                                                                lastName: req.body.lastName,
                                                                username: req.body.username,
                                                                email: req.body.email});
        if (!error) {
            const data = await usersService.userPostService(req.body);
            res.send(data)
            
        }else {
            res.status(400).json({ error: error.details[0].message });
        }
    } catch(err) {
        next(err)
    }
};

async function deleteUser(req, res, next) {
    try {
        const { error, value } = schemas.idSchema.validate({ id: req.params.id });
        if (!error) {
            const user = await usersService.userDeleteService(req.params.id);
            console.log(user)
            res.send({"deleted user": deletedId})
            
        }else {
            res.status(400).json({ error: error.details[0].message });
        }
    } catch(err) {
        next(err)
    }
};

async function putUser(req, res, next) {
    try {
        const { error, value } = schemas.idSchema.validate({ id: req.params.id });
        if (!error) {
            const data = await usersService.userGetService(req.params.id);
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
    getUser,
    postUser,
    deleteUser,
    putUser
}