import { AbstractMovie } from "./abstractMovie";

export class RegularMovie extends AbstractMovie {
  price: number = 2;
  maxRentDay = 2;
}