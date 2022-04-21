export interface PersonInterface {
  id: string;
  name: string;
  age: number;
  greet(): void;
}
export default abstract class Person implements PersonInterface {
  // statine savyvybe, bendra ir priskiriama visai klasei
  // iskvieciama arba pasiekiama <ClassesPav>.<savybe>
  // Person.count
  static count: number = 0;
  id: string;
  name: string;
  age: number;

  constructor(name: string, age: number) {
    Person.count++;
    this.id = `id_${Person.count}`;
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}, and I am ${this.age} years old. `);
  }
  // abstraktus metodas turi buti aprasyta vaikinese klasese.
  abstract calcPay(): number;
}
