import repository from "../repository/usersRepository.js"

async function usersService() {
    const data = await repository.readUsersJson();
    return data
}

async function userGetService(id) {
    const data = await repository.readUsersJson();
    return data.filter(d => d.id == id)
}

async function userPostService(user) {
    user.role = "user";
    user.userSince = new Date().toISOString();
    const returnedUser = await repository.writeUsersJson(user)
    return returnedUser
}

async function userDeleteService(id) {
    const users = await repository.readUsersJson()
    const exists = users.filter(obj => obj.id == id)
    if (exists.length > 0) {
        await repository.writeDeleteUsersJson(id);
    } else {
        throw new Error('User not found.');
    }
}


export default {
    usersService,
    userGetService,
    userPostService,
    userDeleteService
}