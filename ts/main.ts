import Employee from './classes/Employee.js';
import Person from './classes/Person.js';

// const p1 = new Person('James', 40);
// console.log('p1 ===', p1);
// p1.greet();

// sukuriam darbuotojus
const e1 = new Employee('Mike', 35, 15);
const e2 = new Employee('Jill', 37, 17);
e1.work(40);
e1.work(20);
e1.work(5);
// e2 dirba 80 val

e2.work(80);
e2.greet();

[e1, e2].forEach((eObj: Employee) => eObj.calcPay());
