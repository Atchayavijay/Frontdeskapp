const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');

const app =express();

app.get('/', (request,response) => {
    response.json({message:"Hello world"});
});
app.listen(PORT,()=>{
    console.log('Server is running @ http://localhost:3001')
});

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log("Connect to the database....")
})
.catch(()=>{
    console.log("Error connecting to MongoDb........",error)
});