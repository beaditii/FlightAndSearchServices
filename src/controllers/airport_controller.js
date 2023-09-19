const {AirportService}=require('../services/index');
const airportService=new AirportService();

const create=async(req,res)=>{
    try{
  const response=await airportService.create(req.body);
  return res.status(201).json({
    data:response,
    success:true,
    err:{},
    message:'Sucessfully created the airport'
   });
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a new airport',
            err:error
        })
    }
}

module.exports = {
    create
}