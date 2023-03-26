import {promises as fs} from "fs";

export async function readPersonJson() {
    const data = JSON.parse(await fs.readFile("./data/person.json"));
    return data
}

export default {
    readPersonJson,
}