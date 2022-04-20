export default class Person {
    constructor(name, age) {
        this.id = '';
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I am ${this.name}, and I am ${this.age} years old. `);
    }
}
