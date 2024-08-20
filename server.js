// import express module
var express=require('express')


var app=express()
var port=5000;

app.get('/',(req,res)=>{
    res.send("<h1>HELLO WORLD</h1>")
})

app.listen(port,()=>{
    console.log('this page is running in port 5000');
});