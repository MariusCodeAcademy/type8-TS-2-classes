interface AnimalInterface {
  sound: string;
  fluffy: boolean;
  // breed: string;
  makeSound(): void;
}

export default class Animal implements AnimalInterface {
  // private - pasiekiama tik is klases vidaus
  private breed: string;
  readonly fluffy: boolean;
  sound: string;
  constructor(b: string, f: boolean, s: string) {
    this.breed = b;
    this.fluffy = f;
    this.sound = s;
  }

  makeSound(): void {
    console.log(`${this.sound}!!!!!`);
  }
}
