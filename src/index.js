const express = require('express');
const {PORT}=require('./config/serverConfig');

const ApiRoutes=require('./routes/index');

const bodyParser = require('body-parser');
//const CityRepository=require('./repository/city_repository');
// const {Airplane} = require('./models/index');
const db=require('./models/index');
const setupAndStartServer=async()=>{
    //create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
   app.use('/api', ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
         db.sequelize.sync({alter:true});
        }
       // const repo= new CityRepository();
       //repo.createCity({name:"New Delhi"});
      /* const  airports= await Airport.findAll({
         include:[{
            model:City
         }]
       });
       console.log(airports);
*/
  /*db.sequelize.sync({alter:true});
    const city=await City.findOne({
      where:{
         id:18
      }
    });

    const airports=await city.getAirports();
    const newAirport=await Airport.create({
      name:'Jindal vijyanagar Airport',
      cityId:18
    })
    const newAirport=await Airport.findOne({
      where:{
         id:5
      }
    });
    await city.addAirport(newAirport);*/
   // console.log(city,airports);
    //  await Airplane.create({
    //   modelNumber:'Bombardier CRJ',

    //  })
    });}

    setupAndStartServer();
