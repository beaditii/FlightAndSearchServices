const {FlightsRepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require('../utils/helper')
class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightsRepository();
    }
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime))
            {
               throw {error:"Arrival time cannot be less than departure time"};
            }
          const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
          const flight=await this.flightRepository.createFlight(data);
          return flight;
        }
        catch(error){
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getFlightData(){

    }
}
module.exports=FlightService;
/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departuretTime,
 * price,
 * totalSeats->airplane
 * }
 */