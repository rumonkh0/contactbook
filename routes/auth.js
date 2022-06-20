const express = require("express");
const User = require("../models/User");
const {protect} = require("../middleware/auth");
const {register, login, logout, updateDetails, updatePassword} = require("../controllers/auth");

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.put('/updatedetails', protect, updateDetails);
router.put('/updaepassword', protect, updatePassword);

module.exports = router;
