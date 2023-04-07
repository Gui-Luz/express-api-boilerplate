import {promises as fs} from "fs";

async function readUsersJson() {
    const data = JSON.parse(await fs.readFile("./data/users.json"));
    return data.users
}

async function writeUsersJson(user) {
    const data = JSON.parse(await fs.readFile("./data/users.json"));
    const newUser = {
        "id": data.nextId,
        "first name": user.firstName,
        "last name": user.lastName,
        "username": user.username,
        "email": user.email,
        "role": user.role,
        "user since": user.userSince
    }
    data.nextId += 1;
    data.users.push(newUser);
    fs.writeFile("./data/users.json", JSON.stringify(data));
    return newUser
}

async function writeDeleteUsersJson(id) {
    const data = JSON.parse(await fs.readFile("./data/users.json"));
    const newData = {
        "nextId": data.nextId,
        "users": data.users.filter(obj => obj.id != id)
    }
    fs.writeFile("./data/users.json", JSON.stringify(newData));
    return id
}

export default {
    readUsersJson,
    writeUsersJson,
    writeDeleteUsersJson
}