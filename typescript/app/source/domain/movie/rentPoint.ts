// import { Rental } from "../models/rental";

// const rentPointsFor =
//     (f:(r:Rental)=>number):
//         (rentals:Rental[])=>number=>{
//         return (rentals) => rentals.map(r=>f(r)).reduce((x,y)=>x+y);
//     };

// const rentPointFor = (r:Rental):number=>{
//     let baserenterPoint = 1;
//     if(r.rentalDays>1){
//         return baserenterPoint+ r.movieConfiguration.additionalRenterPoint
//     }
//     return baserenterPoint
// };

// export const calculateRentalPoints: (rentals: Rental[]) => number = rentPointsFor(rentPointFor)