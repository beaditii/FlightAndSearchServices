const express = require('express');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('bodyParser');
const setupAndStartServer=async()=>{
    //create the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    });}
    setupAndStartServer();
