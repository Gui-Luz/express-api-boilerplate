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
    const data = await repository.readUsersJson();
    const user = data.filter(d => d.id == id)
    await repository.writeDeleteUsersJson(user.id);
    return user
}
     

export default {
    usersService,
    userGetService,
    userPostService,
    userDeleteService
}