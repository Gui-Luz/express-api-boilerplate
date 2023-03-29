import readData from "../repository/usersRepository.js"

function usersService() {
    const data = readData.readUsersJson();
    return data
}

async function userService(id) {
    const data = await readData.readUsersJson();
    return data.filter(d => d.id == id)
}

export default {
    usersService,
    userService
}