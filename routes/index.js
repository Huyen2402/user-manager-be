var express = require('express');
var router = express.Router();
const Users = require('../db/Users')
const connect = require('../db');
const getAllUsers = require('../middleware/m_Users')
/* GET home page. */
router.get('/', getAllUsers.getAllUsers);
router.post('/', getAllUsers.createUser )

module.exports = router;
