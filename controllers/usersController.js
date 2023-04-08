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
            await usersService.userDeleteService(req.params.id);
            res.send({"deleted user": req.params.id })
            
        }else {
            res.status(400).json({ error: error.details[0].message });
        }
    } catch(err) {
        next(err)
    }
};

async function putUser(req, res, next) {
    try {
        const { errorId, valueID } = schemas.idSchema.validate({ id: req.params.id });
        const { error, value } = schemas.userSchema.validate({ firstName: req.body.firstName,
                                                                lastName: req.body.lastName,
                                                                username: req.body.username,
                                                                email: req.body.email});
        if (!(errorId && error))  {
            const updatedInfo = await usersService.userPutService(req.params.id, req.body);
            res.send(updatedInfo)
        } else {
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