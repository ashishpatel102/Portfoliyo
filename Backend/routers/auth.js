const express = require('express');
const auth = express.Router();
const {signup , login} = require('../controllers/auth'); 

auth.post('/login',login)
auth.post('/signup',signup)


module.exports = {auth};