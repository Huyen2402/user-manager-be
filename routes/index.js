var express = require('express');
var router = express.Router();
const Users = require('../db/Users')
const connect = require('../db');
const getAllUsers = require('../middleware/m_Users')
/* GET home page. */
router.get('/', getAllUsers.getAllUsers);
router.post('/', getAllUsers.createUser )
router.get('/:id', getAllUsers.findUserByID);
router.put('/:id',getAllUsers.verifyToken, getAllUsers.updateUser);
router.post('/login', getAllUsers.loginUser)
module.exports = router;
