const express = require('express');
const {PORT}=require('./config/serverConfig');

const ApiRoutes=require('./routes/index');

const bodyParser = require('body-parser');
const CityRepository=require('./repository/city_repository');
const setupAndStartServer=async()=>{
    //create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
 app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        const repo= new CityRepository();
        repo.createCity({name:"New Delhi"});
    });}

    setupAndStartServer();
