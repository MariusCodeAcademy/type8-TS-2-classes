interface PersonInterface {
  id: string;
  name: string;
  age: number;
  greet(): void;
}
export default class Person implements PersonInterface {
  id: string;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.id = `id_${Math.round(Math.random() * 100000000)}`;
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old. `);
  }
}
