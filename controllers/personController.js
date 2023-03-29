import personService from "../services/personService.js"
import personSchema from "../utils/validators/personSchema.js";

async function getPerson(req, res, next) {
    try {
        const data = await personService.personService();
        res.send(data)
    } catch(err) {
        next(err)
    }
}

export default {
    getPerson
}