"use strict";
console.log('main.ts');
const obj1 = {
    name: 'James',
    age: 30,
    greet: () => {
        console.log(`${this.name} is ${this.age} year old. Hi!`);
    },
};
const obj2 = {
    name: 'Mike',
    age: 50,
    greet: () => {
        console.log(`${this.name} is ${this.age} year old. Hi!`);
    },
};
console.log('obj1-2 ===', obj1, obj2);
class UserObj {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet() {
        console.log(`${this.name} is ${this.age} year old. Hi!`);
    }
}
const obj3 = new UserObj('Jill', 35);
obj3.greet();
const obj4 = new UserObj('Bob', 45);
console.log('obj4 ===', obj4);
const usersArr = [obj3];
usersArr.push({ name: 'james', age: 25 });
usersArr.push(obj2);
console.log('usersArr ===', usersArr);
