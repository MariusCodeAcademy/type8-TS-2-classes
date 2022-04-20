import Animal from './classes/Animal.js';
import Mamal from './classes/Mamal.js';
const a1 = new Animal('dog', true, 'vuff');
a1.makeSound();
const a2 = new Animal('cat', true, 'miau');
a2.makeSound();
const m1 = new Mamal('monkey', true, 'monkeySound', false);
m1.makeSound();
console.log([a1, a2, m1]);
