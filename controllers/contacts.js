const {ObjectId} = require("mongodb")

//Connect to DB
const client = require("../db/db")

async function createContact(req, res){
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favoriteColor: req.body.favoriteColor
    }
    const result = await client.db("test").collection("contacts").insertOne(contact)
    //Credit: Brother Birch
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'Some error occurred while creating the contact.');
    }
}

async function deleteContact(req, res){
    const id = req.params.id
    const obj = new ObjectId(id)
    const result = await client.db("test").collection("contacts").deleteOne({_id: obj})
    if (result.deletedCount > 0) {
        res.status(204).json(result);
    } else {
        res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
    }
}

async function updateContact(req, res){
    const id = req.params.id
    const obj = new ObjectId(id)
    const update = {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthday: req.body.birthday,
            favoriteColor: req.body.favoriteColor
        }
    }
    const result = await client.db("test").collection("contacts").updateOne({_id: obj}, update)
    //Credit: Brother Birch
    if (result.modifiedCount > 0) {
        res.status(204).json(result);
    } else {
        res.status(500).json(result.error || 'Some error occurred while updating the contact.');
    }
}

async function getAllContacts(req, res){
    const result = await client.db("test").collection("contacts").find().toArray()
    res.status(200).json(result);
}

async function getContact(req, res){
    const id = req.params.id
    const obj = new ObjectId(id)
    const result = await client.db("test").collection("contacts").findOne({_id: obj})
    res.status(200).json(result);
}

module.exports = {
    createContact,
    getAllContacts,
    getContact,
    deleteContact,
    updateContact
}