const { getUsersCtrl } = require('./users.ctrl');

const express = require('express').Router();

express.get('/users', (req, res) => getUsersCtrl(req, res));

module.exports = express;
