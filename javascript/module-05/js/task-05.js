"use strict";
export class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = 0;
  }
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    );
  }
  get price() {
    return this._price;
  }
  set price(inputPrise) {
    this._price = inputPrise;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    this.speed = value;
  }
  decelerate(value) {
    if (this.speed - value < 0) {
      this.speed = 0;
    }
    this.speed -= value;
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

/*The script below were commented to allow button in html run this script*/
/*
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);

mustang.turnOff();

Car.getSpecs(mustang); 

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price);
*/
