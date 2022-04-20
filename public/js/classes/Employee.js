import Person from './Person.js';
export default class Employee extends Person {
    constructor(name, age, hourlyPay) {
        super(name, age);
        this.hoursWorked = 0;
        this.payPerHour = hourlyPay;
    }
    work(valSk) {
        this.hoursWorked += valSk;
    }
    calcPay() {
    }
}
