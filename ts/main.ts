import Employee from './classes/Employee.js';
import Partner from './classes/Partner.js';
import Person from './classes/Person.js';
import Project from './classes/Project.js';

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

// [e1, e2].forEach((eObj: Employee) => eObj.calcPay());

// sukuriam projektus
const pr1 = new Project('footer', 150);
const pr2 = new Project('header', 250);
const pr3 = new Project('contact form', 750);
const fakePr = { title: 'fakeMain', price: 800, done: false, id: 'id_4587' };
const pr4 = new Project('about', 300);
const pr5 = new Project('gallery', 400);
// // pr1.done = true;
// pr1.finishProject();
// console.log('pr1 ===', pr1);

// Partners

const parJohn = new Partner('John', 44);
const parJill = new Partner('Jill', 42);

// parJohn priskiriam pr1 projekta
parJohn.addProject(pr1);
// parJohn priskiriam pr2 projekta
parJohn.addProject(pr2);
parJohn.addProject(pr4);
console.log('parJohn ===', parJohn);
// parJill priskiriam pr3 projekta
parJill.addProject(pr3);
parJill.addProject(pr5);
// parJill priskiriam fakePr projekta
// parJill.addProject(fakePr); // err
console.log('parJill ===', parJill);
// patikrinti konsole ar yra sudeti projektai

// parJohn pabaigia pirmaji savo projekta su pr_2
parJohn.workDone('pr_2');

console.log('Person.count ===', Person.count);

[pr1, pr2, pr3, pr4, pr5].forEach((pr) => console.log(pr));
