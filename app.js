const express = require('express');
const app = express();
const bodyParser = require("body-parser")

require("dotenv/config")

//Import routes
const contatctsRoute = require("./routes/contacts")

//Middleware
app.use(bodyParser.json())
app.use("/contacts", contatctsRoute)

//Routes
app.get("/", (req, res) => {
    res.send("Home")
})

//Listen to server
app.listen(process.env.PORT, () => {
    console.log('Web Server is listening at port ' + process.env.PORT);
});

