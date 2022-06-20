const express = require("express");
const User = require("../models/Contact");
const {protect} = require("../middleware/auth");
const { createContact } = require("../controllers/contacts");

const router = express.Router();

router.post('/createcontact', protect, createContact);

module.exports = router;
