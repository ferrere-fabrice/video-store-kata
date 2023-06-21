import { Rental } from './rental';
import { AbstractMovie } from './abstractMovie';
import { NewMovie } from './newMovie';

export class CashRegister {
  constructor(private movie: AbstractMovie, private rental: Rental) {}

  /**
   * récupère le nombre de location
   * puis vérifie si le nombre de jour dépasse le temps minimum de location
   * si le temps de location dépasse le temps minimum de location
   */
  calculPrice() : number {
    const rental = this.rental;
    const movieLoue =  this.movie;
    let additionalPrice = 0;

    if(rental.rentalDays > movieLoue.maxRentDay)
      additionalPrice = this.calculAdditionnalPrice(rental.rentalDays, movieLoue.maxRentDay, movieLoue.additionaCostPerDay);

    return movieLoue.price + additionalPrice;
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

    const movie = this.movie;
    const rental = this.rental;

    if(movie instanceof NewMovie && rental.rentalDays > movie.maxRentDay)
      return movie.fidelityPoint + movie.bonusFidelityRentalLate;

    return movie.fidelityPoint;
  }
}
