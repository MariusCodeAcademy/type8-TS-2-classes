import Employee from './classes/Employee.js';
const e1 = new Employee('Mike', 35, 15);
const e2 = new Employee('Jill', 37, 17);
e1.work(40);
e1.work(20);
e1.work(5);
e2.work(80);
e2.greet();
[e1, e2].forEach((eObj) => eObj.calcPay());
