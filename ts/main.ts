import Animal from './classes/Animal.js';
import Mamal from './classes/Mamal.js';
import Person from './classes/Person.js';

const a1: Animal = new Animal('dog', true, 'vuff');
// a1.breed = 'wolf';
// a1.fluffy = false;
a1.makeSound();
const a2: Animal = new Animal('cat', true, 'miau');
a2.makeSound();

const m1 = new Mamal('monkey', true, 'monkeySound', false);
m1.makeSound();
console.log([a1, a2, m1]);

const p1 = new Person('James', 40);
console.log('p1 ===', p1);
