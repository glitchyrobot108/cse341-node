const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    },
 })

 module.exports = mongoose.model("Contacts", ContactSchema)