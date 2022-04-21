import Person, { PersonInterface } from './Person.js';

interface EmployeeInterface extends PersonInterface {
  work(valSk: number): void;
  // status: boolean;
}

// sukurti Employee class pralecian Person clase
export default class Employee extends Person implements EmployeeInterface {
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

  calcPay(): number {
    // 1. sudauginti isdirbtas val su valandiniu
    const totalPay = this.hoursWorked * this.payPerHour;
    // 2. nunulinti valandas
    this.hoursWorked = 0;
    // 3. consoleje pranesti varda ir kiek sumoketi
    console.log(`🤑 Employee ${this.name} is about to be payed ${totalPay}eur`);
    // 4. grazinti skaiciu kiek ismoketi
    return totalPay;
  }
}

// const e45 = new Employee('Bond', 45, 25);
// console.log('e45 ===', e45);
// e45.work(4);
// e45.work(16);
// console.log('e45 ===', e45);

// console.log('to pay', e45.calcPay());
// console.log('e45 ===', e45);

// iskviesti tevini konstruktorius su super()
