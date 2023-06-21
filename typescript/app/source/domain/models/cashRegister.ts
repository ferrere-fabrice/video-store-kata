import { Rental } from './rental';
import { AbstractMovie } from './abstractMovie';
import { NewMovie } from './newMovie';

export class CashRegister {
  constructor(private movies: AbstractMovie[], private rental: Rental) {}

  /**
   * récupère le nombre de location
   * puis vérifie si le nombre de jour dépasse le temps minimum de location
   * si le temps de location dépasse le temps minimum de location
   */
  calculPrice() : number {
    const rental = this.rental;
    const movies=  this.movies;
    let additionalPrice = 0;
    let totalPriceWithoutAdditionnal = 0;

    // je boucle sur chacun de mes films et s'ils sont en retard je calcul les frais additionnels
    movies.forEach((movie : AbstractMovie) => {
      if(rental.rentalDays > movie.maxRentDay)
        additionalPrice += this.calculAdditionnalPrice(rental.rentalDays, movie.maxRentDay, movie.additionaCostPerDay);
      totalPriceWithoutAdditionnal += movie.price;
    });

    return totalPriceWithoutAdditionnal + additionalPrice;
  }

  /**
   * On soustrait le nombre de jour loué au temps minimum de location 
   * et on le multiplie par le cout additionnel du film
   * @param nbRentalDay nombre de jour loué
   * @param nbMinRentalDayOfFilm  nombre de jour minimum du film
   * @param costAdditionnal les couts additionnels si on garde trop longtemps le film
   * @returns le cout additionnel
   */
  private calculAdditionnalPrice(nbRentalDay : number, nbMinRentalDayOfFilm : number, costAdditionnal:number) : number{
    return (nbRentalDay - nbMinRentalDayOfFilm ) * costAdditionnal;
  }

  /**
   * Permets d'obtenir le nombre de point lors du rendu du film
   * @returns 
   */
  calculFidelityPoint() :number{

    const movies = this.movies;
    const rental = this.rental;
    let totalPointsOfFidelity = 0; 

    movies.forEach((movie : AbstractMovie)=>{
      if(movie instanceof NewMovie && rental.rentalDays > movie.maxRentDay)
        totalPointsOfFidelity +=  movie.fidelityPoint + movie.bonusFidelityRentalLate;
      else
        totalPointsOfFidelity +=  movie.fidelityPoint;
    })


    return totalPointsOfFidelity;
  }
}
