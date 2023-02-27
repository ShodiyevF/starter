const { getUsersModel } = require('./users.model');

async function getUsersCtrl(req, res) {
    const users = await getUsersModel();
    res.json(users);
}

module.exports = {
    getUsersCtrl,
};
