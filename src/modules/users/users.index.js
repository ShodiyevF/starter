const { getUsersCtrl, createUserCtrl } = require('./users.ctrl');

const express = require('express').Router();

express.get('/api/users', (req, res) => getUsersCtrl(req, res));
express.post('/api/users', (req, res) => createUserCtrl(req, res));

module.exports = express;
