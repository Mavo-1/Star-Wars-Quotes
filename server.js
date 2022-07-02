const express = require('express');
const bodyParser= require('body-parser')
const MongoClient= require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Yoda:Mavericks1@cluster0.ewzcx1v.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true})
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
})
const app= express();
app.listen(3000,function(){
    console.log('Jarvis now turning on server')
})
app.use(bodyParser.urlencoded({extended: true}))
app.get('/',(req,res)=>{
    res.sendFile('C:/Users/mavoh/OneDrive/Desktop/Star Wars Quote App'+ '/index.html')
})
app.post('/quotes',(req,res)=>{
    console.log(req.body)
})