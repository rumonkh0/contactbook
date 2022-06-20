const express = require("express");
const User = require("../models/Contact");
const {protect} = require("../middleware/auth");
const { createContact, getAllContacts, deteleContact } = require("../controllers/contacts");

const router = express.Router();

router.post('/createcontact', protect, createContact);
router.get('/contacts', protect, getAllContacts);
router.delete('/contact/:id', protect, deteleContact);

module.exports = router;
