import { NewMovie } from "./domain/models/newMovie";
import { RegularMovie } from "./domain/models/regularMovie";
import { ChildrenMovie } from "./domain/models/childrenMovie";
import { CashRegister } from "./domain/models/cashRegister";
import { Rental } from "./domain/models/rental";


const newMovie = new NewMovie("Harry Potter");
const regularMovie = new RegularMovie("Mission Impossible");
const childrenMovie = new ChildrenMovie("Peppa pig");

const rentalNewMovie = new Rental(1);
const rentalregularMovie = new Rental(1);
const rentalcChildrenMovize = new Rental(1);

const cashRegister = new CashRegister([newMovie],rentalNewMovie);

const duPrice = cashRegister.calculPrice();
const rentalPoint = cashRegister.calculFidelityPoint();


console.log("le prix du film loué: ", duPrice);
console.log("Le nombre de point acquis à la location: ",rentalPoint);







// console.log("------ PLAIN TEXT --------")
// console.log(
//     printTextReceipt("Text Receipt User",
//         Array.of(
//             aRental,
//             anotherRental,
//             thirdRental)));
// console.log("------ HTML --------")
// console.log(
//     printHtmlReceipt("Html Receipt User",
//         Array.of(
//             aRental,
//             anotherRental,
//             thirdRental)));