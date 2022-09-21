//https://www.codewars.com/kata/547274e24481cfc469000416

class Human {}
class Man extends Human{}
class Woman extends Human{}
class God{

  static create(){

    
    let adam = new Man;
    let eve = new Woman;
    
    let humans = [adam, eve];
    console.log(humans)
    console.log(humans[0] instanceof Man);
    
    return humans
  }
}