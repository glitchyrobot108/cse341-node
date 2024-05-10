require("dotenv").config()
const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const contacts = require("./controllers/contacts");

//Lesson 2
app.get("/", async (req, res) => {
    const results = await contacts.listDocumentsRoute()
    res.send(results)
    console.log(results)
})

// app.get("/contact/:id", async (req, res)=>{
//     const searchParam = req.params.id
//     const obj = new ObjectId(searchParam)
//     const sentObject = {_id: obj}
//     const result = await contacts.listDocumentByIdRoute(sentObject)
//     res.json(result)
// })

//Credit to ChatGPT
// Define route to search for contact by ID
app.get('/:id', async (req, res) => {
    const id = req.params.id; // Get the ID parameter from the URL

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URL);
    try {
        await client.connect();

        // Find contact by ID in the "contacts" collection
        const contact = await client.db("test").collection("contacts").findOne({ _id: new ObjectId(id) });
        
        if (!contact) {
            // If contact is not found, return 404 Not Found
            res.status(404).send('Contact not found');
            return;
        }

        // If contact is found, return it as JSON
        res.json(contact);
    } catch (err) {
        // If an error occurs, return 500 Internal Server Error
        console.error(err);
        res.status(500).send('Internal Server Error');
    } finally {
        // Close MongoDB connection
        await client.close();
    }
});

app.listen(process.env.PORT, () => {
    console.log('Web Server is listening at port ' + process.env.PORT);
});

