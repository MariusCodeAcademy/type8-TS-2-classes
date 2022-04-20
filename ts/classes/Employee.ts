import Person from './Person.js';

// sukurti Employee class pralecian Person clase
export default class Employee extends Person {
  // prideti 2 private savybes hoursWorked ir payPerHour
  private hoursWorked: number;
  private payPerHour: number;

  // construktoriuje nustatys hoursWorked = 0, payPerHour gauta argumentu
  constructor(name: string, age: number, hourlyPay: number) {
    super(name, age);
    this.hoursWorked = 0;
    this.payPerHour = hourlyPay;
  }

  work(valSk: number): void {
    this.hoursWorked += valSk;
  }

  calcPay() {}
}

// iskviesti tevini konstruktorius su super()
