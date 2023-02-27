const { uniqRow } = require("../../lib/pg");
const {errorMiddleware, name} = require("../../middleware/error.widdleware")

async function getUsersModel(){
    const users = await uniqRow('select * from users;')
    return users.rows
}

module.exports = {
    getUsersModel
}