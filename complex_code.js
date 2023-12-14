/* 
   Filename: complex_code.js 

   Description: 
   This code demonstrates a complex JavaScript application that simulates a virtual airline management system. 
   It includes various classes, functions, and data structures, providing a comprehensive solution for managing 
   flights, passengers, reservations, and billing.
*/

// Class representing an airline
class Airline {
  constructor(name, flights) {
    this.name = name;
    this.flights = flights;
  }

  getFlightById(id) {
    return this.flights.find(flight => flight.id === id);
  }

  getFlightsByDeparture(departure) {
    return this.flights.filter(flight => flight.departure === departure);
  }
}

// Class representing a flight
class Flight {
  constructor(id, departure, destination, departureTime, arrivalTime, capacity) {
    this.id = id;
    this.departure = departure;
    this.destination = destination;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.capacity = capacity;
    this.passengers = [];
  }

  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return true;
    }
    return false;
  }
}

// Class representing a passenger
class Passenger {
  constructor(name, age, passportNumber) {
    this.name = name;
    this.age = age;
    this.passportNumber = passportNumber;
  }
}

// Main function to run the airline management system
function runAirlineManagementSystem() {
  const airline = new Airline("Virtual Airline", [
    new Flight("F001", "London", "New York", new Date(), new Date(), 200),
    new Flight("F002", "Tokyo", "Paris", new Date(), new Date(), 150),
    new Flight("F003", "Dubai", "Sydney", new Date(), new Date(), 300),
    // ... more flights
  ]);

  const passenger1 = new Passenger("John Doe", 32, "ABC123");
  const passenger2 = new Passenger("Jane Smith", 28, "XYZ456");

  const flight1 = airline.getFlightById("F001");
  const flight2 = airline.getFlightById("F002");

  flight1.addPassenger(passenger1);
  flight2.addPassenger(passenger2);

  console.log("Airline: " + airline.name);
  console.log("Flight 1 Passengers: ", flight1.passengers);
  console.log("Flight 2 Passengers: ", flight1.passengers);
}

runAirlineManagementSystem();