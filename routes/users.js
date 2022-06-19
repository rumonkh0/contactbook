const express = require("express");
const User = require("../models/User");
const {createUser} = require("../controllers/users");

const router = express.Router();

router.post('/',createUser);

module.exports = router;
