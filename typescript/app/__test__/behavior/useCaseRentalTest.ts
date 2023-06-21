import { calculAdditionalPrice, calculFidelityPoint, calculTotalPrice, cashRegister, childrenMovie, newMovie, regularMovie, rentalWithDelay, rentalWithoutDelay } from "../utils/builder";


describe('case with base cost', function () {
  it(`Étant donnée un client qui loue plusieurs films standards
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix des plusieurs films standard sans cout additionel`, () => {
    // given or arrange
    const regularM = regularMovie();
    const movies = [regularM, regularM];
    const rentalWithoutD = rentalWithoutDelay();
    const cash = cashRegister(movies, rentalWithoutD);
    const totalPrice = calculTotalPrice(movies);

    // when  or act
    const result = cash.calculPrice();
    // then or assert

    expect(result).toEqual(totalPrice);
  });

  it(`Étant donnée un client qui loue plusieurs films nouveau
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix de plusieurs films nouveau sans cout additionel`, () => {
    // given or arrange
    const newM = newMovie();
    const movies = [newM, newM];
    const rentalWithoutD = rentalWithoutDelay();
    const totalPrice = calculTotalPrice(movies);
    const cash = cashRegister(movies, rentalWithoutD);

    // when  or act
    const result = cash.calculPrice();
    // then or assert

    expect(result).toEqual(totalPrice);
  });

  it(`Étant donnée un client qui loue plusieurs films enfants
      et le rends avant le temps maximum de location 
      alors le prix de la location doit être le prix de plusieurs films enfants pour enfant sans cout additionel`, () => {
    // given or arrange
    const childrenM = childrenMovie();
    const movies = [childrenM, childrenM];
    const rentalWithoutD = rentalWithoutDelay();
    const cash = cashRegister(movies, rentalWithoutD);
    const totalPrice = calculTotalPrice(movies);

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(totalPrice);
  });
});

describe('case with additionnal cost', function () {
  const delayDay = 5;

  it(`Étant donnée un client qui loue plusieurs film de type différents 
      et le rends après le temps maximum de location avec 2 jours de retard
      alors le prix de la location doit être le prix de plusieurs film standard avec les couts additionel de 2 jours`, () => {
    // given or arrange
    const regularM = regularMovie();
    const newM = newMovie();
    const movies = [regularM, newM];
    const rentalWithD = rentalWithDelay(delayDay);
    const cash = cashRegister(movies, rentalWithD);
    const totalPrice = calculTotalPrice(movies);
    const additionnalPrice = calculAdditionalPrice(movies, delayDay);

    // when  or act
    const result = cash.calculPrice();

    // then or assert
    expect(result).toEqual(totalPrice + additionnalPrice);
  });

  it(`Étant donnée un client qui loue plusieurs nouveau film  
  et le rends après le temps maximum de location avec 2 jours de retard
  alors le prix de la location doit être le prix d'un nouveau film  avec les couts additionel de 2 jours`, () => {
    // given or arrange
    const newM = newMovie();
    const movies = [newM, newM, newM]
    const rentalWithD = rentalWithDelay(delayDay);
    const cash = cashRegister(movies, rentalWithD);
    const totalPrice = calculTotalPrice(movies);
    const additionnalPrice = calculAdditionalPrice(movies, delayDay);
    // when  or act
    const result = cash.calculPrice();
    // then or assert
    expect(result).toEqual(totalPrice + additionnalPrice);
    expect(result).toEqual(45);
  });
});

describe('point of fidelity calculator', function () {
  const delayDay = 5;

  it(`Étant donnée un client qui loue un film standard
    alors lorsqu'il rend le film les points cumulés sont les points standards`, () => {

    // given or arrange
    const regularM = regularMovie();
    const newM = newMovie();
    const childrenM = childrenMovie();
    
    const movies = [newM, regularM, childrenM]
    const rentalWithD = rentalWithoutDelay();
    const cash = cashRegister(movies, rentalWithD);
    const totalFidelityPoint = calculFidelityPoint(movies, 0);
    // when  or act
    const result = cash.calculFidelityPoint();

    // then or assert
    expect(result).toEqual(totalFidelityPoint);
    expect(result).toEqual(3);
  });

  it(`Étant donnée un client qui loue un film standard
    alors lorsqu'il rend le film les points cumulés sont les points standards`, () => {

    // given or arrange
    const regularM = regularMovie();
    const newM = newMovie();
    const childrenM = childrenMovie();
    
    const movies = [newM, regularM, childrenM]
    const rentalWithD = rentalWithDelay(delayDay);
    const cash = cashRegister(movies, rentalWithD);
    const totalFidelityPoint = calculFidelityPoint(movies, delayDay);
    
    const result = cash.calculFidelityPoint();

    // then or assert
    expect(result).toEqual(totalFidelityPoint);
    expect(result).toEqual(4);
  });


});
