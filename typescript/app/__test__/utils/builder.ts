import { AbstractMovie } from '../../source/domain/models/abstractMovie';
import { CashRegister } from '../../source/domain/models/cashRegister';
import { ChildrenMovie } from '../../source/domain/models/childrenMovie';
import { NewMovie } from '../../source/domain/models/newMovie';
import { RegularMovie } from '../../source/domain/models/regularMovie';
import { Rental } from '../../source/domain/models/rental';

const newMovie = () => new NewMovie('nouveau film un');
const regularMovie = () => new RegularMovie('nouveau film un');
const childrenMovie = () => new ChildrenMovie('nouveau film un');

const rentalWithoutDelay = () => new Rental(1);
const rentalWithDelay = (dayDelay: number) => new Rental(dayDelay);

const cashRegister = (movies: AbstractMovie[], rental: Rental) =>
  new CashRegister(movies, rental);

const calculTotalPrice = (movies: AbstractMovie[]) =>
  movies.reduce((totalPrice: number, movie: AbstractMovie) => {
    return totalPrice + movie.price;
  }, 0);

const oldCalculAdditionalPrice = (movies: AbstractMovie[], delay: number) =>
  movies.reduce((totalPrice: number, movie: AbstractMovie) => {
    return totalPrice + delay * movie.additionaCostPerDay;
  }, 0);

function calculAdditionalPrice(movies: AbstractMovie[], delay: number) {
  let totalCostAdditional = 0;

  movies.forEach((movie: AbstractMovie) => {
    if (delay > movie.maxRentDay) {
      totalCostAdditional +=
        (delay - movie.maxRentDay) * movie.additionaCostPerDay;
    }
  });
  return totalCostAdditional;
}

function calculFidelityPoint(movies: AbstractMovie[], delay: number) {
  let totalFidelityPoint = 0;

  movies.forEach((movie: AbstractMovie) => {
    if (movie instanceof NewMovie && delay > movie.maxRentDay)
      totalFidelityPoint += movie.fidelityPoint + movie.bonusFidelityRentalLate;
    else totalFidelityPoint += movie.fidelityPoint;
  });
  return totalFidelityPoint;
}

export {
  newMovie,
  regularMovie,
  childrenMovie,
  rentalWithoutDelay,
  rentalWithDelay,
  cashRegister,
  calculTotalPrice,
  oldCalculAdditionalPrice,
  calculAdditionalPrice,
  calculFidelityPoint,
};
