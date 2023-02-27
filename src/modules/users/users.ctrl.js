const { getUsersModel } = require('./users.model');

async function getUsersCtrl(req, res) {
    const users = await getUsersModel();
    res.json(users);
}

async function createUserCtrl(req, res) {
    const users = await createUserCtrl(req.body);
    if(users.action == false){
        return res.json(users)
    } else {
        return res.json({
            status: 200,
            message: 'User has created'
        })
    }
}

module.exports = {
    getUsersCtrl,
    createUserCtrl
};
