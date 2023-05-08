import User from '../repositories/user.repository.js';
import { hasher } from '../utils/hasher/hasher.js';

async function postUser(user) {
  try {
    if (await User.getUserByUsername(user.username)) {
      throw new Error('Username already in use.');
    } else if (await User.getUserByEmail(user.email)) {
      throw new Error('Email already in use.');
    } else {
      user.role = 'user';
      user.createdAt = new Date().toISOString();
      user.password = await hasher(user.password);
      return await User.insertUser(user);
    }
  } catch (err) {
    throw err;
  }
}

async function getUser(id) {
  try {
    const user = await User.getUser(id);
    return user;
  } catch (err) {
    throw err;
  }
}

async function deleteUser(id) {
  try {
    const result = await User.deleteUser(id);
    return result;
  } catch (err) {
    throw err;
  }
}

async function putUser(user, userNewInfo) {
  try {
    if (await User.getUserByUsername(userNewInfo.username)) {
      throw new Error('Username already in use.');
    } else if (await User.getUserByEmail(userNewInfo.email)) {
      throw new Error('Email already in use.');
    } else {
      const updatedInfo = {
        id: user.id,
        firstName: (userNewInfo.firstName ? userNewInfo.firstName : user.firstName),
        lastName: (userNewInfo.lastName ? userNewInfo.lastName : user.lastName),
        username: (userNewInfo.username ? userNewInfo.username : user.username),
        email: (userNewInfo.email ? userNewInfo.email : user.email),
      };
      const newUserInfo = await User.updateUser(updatedInfo);
      const selectedKeys = ['id', 'username', 'lastName', 'firstName', 'email'];
      const filteredInfo = Object.fromEntries(
        Object.entries(newUserInfo.toJSON())
          .filter(([key]) => selectedKeys.includes(key)),
      );
      return filteredInfo;
    }
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    const user = await User.getUsers();
    return user;
  } catch (err) {
    throw err;
  }
}

export default {
  postUser,
  getUser,
  deleteUser,
  putUser,
  getUsers,
};
