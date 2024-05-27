const express = require('express');
const { ensureAuthenticated } = require('../utils/auth');
const { getUsers, loginUser, registerUser } = require('../controller/userController');
const { userLoginValidate, userRegisterValidate } = require('../utils/userValidation');

const routes = express.Router();

routes.post('/register', userRegisterValidate, registerUser);
routes.post('/login', userLoginValidate, loginUser);
routes.get('/users', ensureAuthenticated, getUsers);

module.exports = routes;
