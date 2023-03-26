import readData from "../repository/personRepository.js"

function personService() {
    const data = readData.readPersonJson();
    return data
}

export default {
    personService
}