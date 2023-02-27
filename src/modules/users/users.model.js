const { uniqRow } = require('../../lib/pg');
const { errorMiddleware, name } = require('../../middleware/error.widdleware');

async function getUsersModel() {
    const users = await uniqRow('select * from users;');
    return users.rows;
}

async function createUserModel(body) {
    const user = await uniqRow('select * from users where user_username = $1', body.username)

    if(user.rows.length){
        return {
            action: false,
            status: 400,
            message: 'user already exists'
        }
    }
    
    await uniqRow(`insert into users (user_fullname, user_username, user_password) values ($1,$2,$3)`);
}

module.exports = {
    getUsersModel,
};
