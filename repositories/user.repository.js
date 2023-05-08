import User from '../models/user.models.js'

async function insertUser (user) {
  try {
    return await User.create(user)
  } catch (err) {
    throw err
  }
}

async function getUsers () {
  try {
    return await User.findAll()
  } catch (err) {
    throw err
  }
}

async function getUser (id) {
  try {
    return await User.findByPk(id)
  } catch (err) {
    throw err
  }
}

async function getUserByEmail (email) {
  return await User.findOne({
    where: {
      email
    }
  })
}

async function getUserByUsername (username) {
  return await User.findOne({
    where: {
      username
    }
  })
}

async function deleteUser (id) {
  try {
    return await User.destroy({
      where: {
        id
      }
    })
  } catch (err) {
    throw err
  }
}

async function updateUser (user) {
  try {
    await User.update(user, {
      where: {
        id: user.id
      }
    })
    return getUser(user.id)
  } catch (err) {
    throw err
  }
}

export default {
  insertUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  getUserByUsername,
  getUserByEmail
}
