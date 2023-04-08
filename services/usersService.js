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

async function userPutService(id, userNewInfo) {
    const users = await repository.readUsersJson()
    const userOldInfo = users.filter(obj => obj.id == id)
    if (userOldInfo.length >0) {
        const updatedInfo = {
            'id': parseInt(id),
            'first name': (userNewInfo.firstName ? userNewInfo.firstName : userOldInfo[0]['first name']),
            'last name': (userNewInfo.lastName ? userNewInfo.lastName : userOldInfo[0]['last name']),
            'username': (userNewInfo.username ? userNewInfo.username : userOldInfo[0]['username']),
            'email': (userNewInfo.email ? userNewInfo.email : userOldInfo[0]['email']),
            'role': userOldInfo[0]['role'],
            'user_since': userOldInfo[0]['user since']
        }
        const newUserInfo = await repository.writeUpdateUserJson(updatedInfo)
        return newUserInfo
    } else {
        throw new Error('User not found.');
    }
}


export default {
    usersService,
    userGetService,
    userPostService,
    userDeleteService,
    userPutService
}