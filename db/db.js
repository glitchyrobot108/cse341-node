require("dotenv/config")
const { MongoClient } = require("mongodb")

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
async function connectDB(){
    try{
        await client.connect()
        console.log("Connected to database")
    }catch(e){
        console.e("Failed to connect to database: " + e)
        throw e
    }
}

connectDB()

module.exports = client