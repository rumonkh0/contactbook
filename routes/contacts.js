const express = require("express");
const {protect} = require("../middleware/auth");
const { createContact, getAllContacts, deteleContact, updateContact } = require("../controllers/contacts");

const router = express.Router();

router.post('/createcontact', protect, createContact);
router.get('/contacts', protect, getAllContacts);
router.delete('/contact/:id', protect, deteleContact);
router.put('/contact/:id', protect, updateContact)

module.exports = router;
