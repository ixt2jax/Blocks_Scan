const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/BlocksScan"; 

const connectToMongo = async ()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully")
    }catch(error){
        console.error("failed to connect to Mongo", error);
    }
}
const crypto = require('crypto');

function generateApiKey() {
    return crypto.randomBytes(32).toString('hex'); // Generate a 32-byte random API key
}

module.exports = connectToMongo;