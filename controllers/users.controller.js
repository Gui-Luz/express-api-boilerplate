import usersService from '../services/user.service.js'
import schemas from '../utils/schemas/user.schemas.js'

async function postUser (req, res, next) {
  try {
    const { error, value } = schemas.userSchema.validate({
      username: req.body.username,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    })
    if (!error) {
      const { id } = await usersService.postUser(req.body)
      res.status(200).json({ message: 'user created', id })
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function getUser (req, res, next) {
  try {
    const { error, value } = schemas.idSchema.validate({
      id: req.params.id
    })
    if (!error) {
      if (req.params.id === req.user.id) {
        const user = await usersService.getUser(req.params.id)
        res.status(200).json(user)
      } else {
        res.status(401).send('Permission denied')
      }
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function deleteUser (req, res, next) {
  try {
    const { error, value } = schemas.idSchema.validate({
      id: req.params.id
    })
    if (!error) {
      if (req.params.id === req.user.id) {
        const result = await usersService.deleteUser(req.params.id)
        if (result === 1) {
          res.status(200).json('User deleted.')
        } else {
          res.status(400).json('User not found')
        }
      } else {
        res.status(401).json({ error: 'Permission denied' })
      }
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function putUser (req, res, next) {
  try {
    const { error, value } = schemas.idSchema.validate({
      id: req.params.id
    })
    if (!error) {
      if (req.params.id == req.user.id) {
        const user = await usersService.putUser(req.user, req.body)
        if (user) {
          res.status(200).json(user)
        } else {
          res.status(400).json('User not found')
        }
      } else {
        res.status(401).json({ error: 'Permission denied' })
      }
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function getUsers (req, res, next) {
  try {
    if (req.user.role === 'admin') {
      const users = await usersService.getUsers()
      res.status(200).json(users)
    } else {
      res.status(401).send('Permission denied')
    }
  } catch (err) {
    next(err)
  }
};

export default {
  postUser,
  getUser,
  deleteUser,
  putUser,
  getUsers
}
