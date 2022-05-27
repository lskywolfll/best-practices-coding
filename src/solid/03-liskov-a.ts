import { Tesla, Audi, Toyota, Honda } from "./03-liskov-b";
import { Vehicle } from "./liskov/classes";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
        const typeCarWithSeats = `${car.constructor.name} with ${car.getNumberOfSeats()} seats.`
        console.log(typeCarWithSeats);
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
