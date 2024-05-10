const { MongoClient } = require("mongodb")

async function listDocumentById(client, searchParam){
    const result = await client.db("test").collection("contacts").findOne(searchParam)
    console.log(result)
    return result
}

async function listDocuments(client){
    const cursor = await client.db("test").collection("contacts").find()
    const results = await cursor.toArray()
    return results
}

async function listDocumentsRoute(){
    const url = process.env.MONGODB_URL
    const client = new MongoClient(url)
    try {
        await client.connect()
        const results = await listDocuments(client)
        return results
    } catch (e){
        console.log(e)
    } finally{
        await client.close()
    }
}

async function listDocumentByIdRoute(searchParam){
    const url = process.env.MONGODB_URL
    const client = new MongoClient(url)
    try {
        await client.connect()
        const result = await listDocumentById(client, searchParam)
        return result
    } catch (e){
        console.log(e)
    } finally{
        await client.close()
    }
}

module.exports = {
    listDocumentsRoute,
    listDocumentByIdRoute
}