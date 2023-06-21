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
const rentalWithDelay = (dayDelay :number) => new Rental(dayDelay);

const cashRegister = (movie: AbstractMovie, rental: Rental) =>
  new CashRegister(movie, rental);

export {
  newMovie,
  regularMovie,
  childrenMovie,
  rentalWithoutDelay,
  rentalWithDelay,
  cashRegister,
};
