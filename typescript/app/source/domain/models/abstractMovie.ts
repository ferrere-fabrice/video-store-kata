import { Rental } from "./rental";

export abstract class AbstractMovie {
    title: string;
    price!: number;
    maxRentDay!: number ;
    additionaCostPerDay: number = 1.5;
    fidelityPoint: number = 1;


    constructor(title :string){
        this.title = title;
    }


}