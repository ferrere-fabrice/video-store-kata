import { AbstractMovie } from "./abstractMovie";

export class NewMovie extends AbstractMovie {
  price: number = 3;
  additionaCostPerDay: number = 3;
  maxRentDay: number = 1;
  bonusFidelityRentalLate : number = 1;
}