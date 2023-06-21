import { AbstractMovie } from "./abstractMovie";

export class ChildrenMovie extends AbstractMovie {
  price: number = 1.5;
  maxRentDay: number = 3;
}