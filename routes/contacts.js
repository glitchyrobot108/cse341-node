const express = require("express")
const router = express.Router()
const contacts = require("../controllers/contacts")

//Get contacts
router.get("/", contacts.getAllContacts)

//Get contact
router.get("/:id", contacts.getContact)

//Create contact
router.post("/", contacts.createContact)

//Delete contact
router.delete("/:id", contacts.deleteContact)

//Update contact
router.put("/:id", contacts.updateContact)

module.exports = router