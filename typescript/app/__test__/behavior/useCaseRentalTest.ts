import {
  cashRegister,
  childrenMovie,
  newMovie,
  regularMovie,
  rentalWithDelay,
  rentalWithoutDelay,
} from '../utils/builder';

describe('case with base cost', function () {
  it(`Étant donnée un client qui loue un film standard 
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix d'un film standard sans cout additionel`, () => {
    // given or arrange
    const regularM = regularMovie();
    const rentalWithoutD = rentalWithoutDelay();
    const cash = cashRegister(regularM, rentalWithoutD);

    // when  or act
    const result = cash.calculPrice();
    // then or assert

    expect(result).toEqual(regularM.price);
  });

  it(`Étant donnée un client qui loue un nouveau film 
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix d'un nouveau film sans cout additionel`, () => {
    // given or arrange
    const newM = newMovie();
    const rentalWithoutD = rentalWithoutDelay();
    const cash = cashRegister(newM, rentalWithoutD);

    // when  or act
    const result = cash.calculPrice();
    // then or assert

    expect(result).toEqual(newM.price);
  });

  it(`Étant donnée un client qui loue un film pour enfant 
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix d'un film pour enfant sans cout additionel`, () => {
    // given or arrange
    const childrenM = childrenMovie();
    const rentalWithoutD = rentalWithoutDelay();
    const cash = cashRegister(childrenM, rentalWithoutD);

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(childrenM.price);
  });
});

describe('case with additionnal cost', function () {
  const delayDay = 2;

  it(`Étant donnée un client qui loue un film standard 
      et le rends après le temps maximum de location avec 2 jours de retard
      alors le prix de la location doit être le prix d'un film standard avec les couts additionel de 2 jours`, () => {
    // given or arrange
    const regularM = regularMovie();
    const rentalWithD = rentalWithDelay(regularM.maxRentDay + delayDay);
    const cash = cashRegister(regularM, rentalWithD);
    const additionalPrice = regularM.additionaCostPerDay * delayDay;

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(regularM.price + additionalPrice);
    expect(result).toEqual(5);
  });

  it(`Étant donnée un client qui loue un nouveau film  
  et le rends après le temps maximum de location avec 2 jours de retard
  alors le prix de la location doit être le prix d'un nouveau film  avec les couts additionel de 2 jours`, () => {
    // given or arrange
    const newM = newMovie();
    const rentalWithD = rentalWithDelay(newM.maxRentDay + delayDay);
    const cash = cashRegister(newM, rentalWithD);
    const additionalPrice = newM.additionaCostPerDay * delayDay;

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(newM.price + additionalPrice);
    expect(result).toEqual(9);
  });

  it(`Étant donnée un client qui loue un film pour enfant  
  et le rends après le temps maximum de location avec 2 jours de retard
  alors le prix de la location doit être le prix d'un film pour enfant avec les couts additionel de 2 jours`, () => {
    // given or arrange
    const childrenM = childrenMovie();
    const rentalWithD = rentalWithDelay(childrenM.maxRentDay + delayDay);
    const cash = cashRegister(childrenM, rentalWithD);
    const additionalPrice = childrenM.additionaCostPerDay * delayDay;

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(childrenM.price + additionalPrice);
    expect(result).toEqual(4.5);
  });
});



describe('point of fidelity calculator', function () {
  const delayDay = 2;

  
  it(`Étant donnée un client qui loue un film standard 
    alors lorsqu'il rend le film les points cumulés sont les points standards`, () => {

    // given or arrange
    const regularM = regularMovie();
    const rentalWithD = rentalWithoutDelay();
    const cash = cashRegister(regularM, rentalWithD);

    // when  or act
    const result = cash.calculFidelityPoint();

    // then or assert
    expect(result).toEqual(regularM.fidelityPoint);
  });

  it(`Étant donnée un client qui loue un nouveau film 
    alors lorsqu'il rend le nouveau film avec 2 jours de retard alors les points cumulés sont les points de fidélités associées au type de film plus un bonus`, () => {

    // given or arrange
    const newM = newMovie();
    const rentalWithD = rentalWithDelay(newM.additionaCostPerDay + delayDay);
    const cash = cashRegister(newM, rentalWithD);

    // when  or act
    const result = cash.calculFidelityPoint();

    // then or assert
    expect(result).toEqual(newM.fidelityPoint + newM.bonusFidelityRentalLate);
  });


});
