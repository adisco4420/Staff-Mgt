const express = require('express');
const StaffController = require('../controllers/StaffController');
const JoiValidator = require('../middlewares/validator');
const AuthMiddleWare = require('../middlewares/auth');
const {CreateStaffValidator} = require('../validations/StaffValidation');


const router = express.Router()

router.post('/create' , AuthMiddleWare, JoiValidator(CreateStaffValidator), StaffController.Create)

module.exports = router;