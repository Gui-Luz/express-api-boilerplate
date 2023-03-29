import {promises as fs} from "fs";

export async function readUsersJson() {
    const data = JSON.parse(await fs.readFile("./data/users.json"));
    return data.users
}

export default {
    readUsersJson,
}