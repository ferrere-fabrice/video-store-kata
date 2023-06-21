// /*
//     Le coût de base d'un film classique est de 2 euros.
//     Après 2 jours de location, un coût supplémentaire de 1,5 euro par jour est appliqué.
//     (Le coût supplémentaire est donc appliqué à partir du 3e jour).

//     Le coût d'une nouvelle sortie est de 3 euros par jour de location.

//     Le coût de base d'un film pour enfants est de 1,5 euro.
//     Après 3 jours de location, un coût supplémentaire de 1,5 euro par jour est appliqué.
//     (Le coût supplémentaire est donc appliqué à partir du 4e jour).

//     Pour chaque vidéo achetée, le client gagne 1 point de fidélité.
// */


// /*
//     Films classiques 2€ + 1.5€ -> 3e jour
//     Nouvelles sorties 3€ + ? 
//     Films pour enfants 1.5€ + 1,5€ -> 4e jour
// */

// export class MovieConfiguration {


//     constructor(public title: string,
//                 public price: number,
//                 public minRentDays: number,
//                 public additionaCostPerDay: number,
//                 public additionalRenterPoint: number) {}
// }

// export const newReleaseConfiguration = (title:string)=>{
//     return  new MovieConfiguration(title,3.0,1,3.0,1)
// };
// export const childrenConfiguration =(title:string)=>{
//     return  new MovieConfiguration(title,1.5,3,1.5,0)
// };
