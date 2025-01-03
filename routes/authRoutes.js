const express = require('express');
const authController = require('../controllers/authControllers')

const authRouter = express.Router();

authRouter.post('/register', authController.register);


 module.exports =authRouter;