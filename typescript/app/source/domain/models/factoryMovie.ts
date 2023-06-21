export class FactoryMovie{

  constructor(public title: string,
    public price: number,
    public maxRentDay: number ,
    public additionaCostPerDay: number,
    public fidelityPoint: number 
  ){}


  public static initChildrenMovie(title : string){
    new FactoryMovie(title, 1,1,1,1);
  }

  public static initNewMovie(title : string){
    new FactoryMovie(title, 0,0,0,0);
  }

  public static initRegularMovie(title : string){
    new FactoryMovie(title, 1,1,1,1);
  }
}