import Animal from './Animal.js';

export default class Mamal extends Animal {
  fourLegs: boolean;
  constructor(b: string, f: boolean, s: string, f4: boolean) {
    super(b, f, s);
    this.fourLegs = f4;
  }
}
