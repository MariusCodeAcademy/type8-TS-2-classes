import Person from './Person.js';
export default class Employee extends Person {
    constructor(name, age, payPerHour) {
        super(name, age);
        this.hoursWorked = 0;
        this.payPerHour = payPerHour;
    }
    get hourlyPay() {
        return this.payPerHour;
    }
    get hours() {
        return this.hoursWorked;
    }
    work(valSk) {
        this.hoursWorked += valSk;
    }
    calcPay() {
        const totalPay = this.hoursWorked * this.payPerHour;
        this.hoursWorked = 0;
        console.log(`🤑 Employee ${this.name} is about to be payed ${totalPay}eur`);
        return totalPay;
    }
}
