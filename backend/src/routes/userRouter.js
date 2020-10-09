const express = require('express');
const userRegistration = require('../controllers/userControllers/registration');
const userLogin = require('../controllers/userControllers/userLogin');

const router = express.Router();

router.post('/registration', userRegistration);
router.post('/login', userLogin);

module.exports = router;
