require("dotenv/config")
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

//Middleware: using bodyparser, using cors, using routes
app.use(bodyParser.json()).use(cors()).use("/", require("./routes"))

//Listen to server
app.listen(process.env.PORT, () => {
    console.log('Web Server is listening at port ' + process.env.PORT);
});

