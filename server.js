const express = require('express');
const mongoose = require('mongoose')

const app =express();

app.get('/', (request,response) => {
    response.json({message:"Hello world"});
});
app.listen(3001,()=>{
    console.log('Server is running @ http://localhost:3001')
});

