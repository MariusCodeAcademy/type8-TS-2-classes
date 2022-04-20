// console.log('main.ts');
// // inicijuoti tsc

// // nustatyti kad failai is ts butu kompiliuojami i public/js

// // nustatyti kad naudosim es6 modules
// // "module": "es2015",

// // OBJ

// type User = {
//   name: string;
//   age: number;
//   greet: () => void;
// };

// const obj1: User = {
//   name: 'James',
//   age: 30,
//   greet: () => {
//     console.log(`${this.name} is ${this.age} year old. Hi!`);
//   },
// };
// const obj2: User = {
//   name: 'Mike',
//   age: 50,
//   greet: () => {
//     console.log(`${this.name} is ${this.age} year old. Hi!`);
//   },
// };
// console.log('obj1-2 ===', obj1, obj2);

// class UserObj {
//   name: string;

//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet() {
//     console.log(`${this.name} is ${this.age} year old. Hi!`);
//   }
// }

// const obj3 = new UserObj('Jill', 35);
// obj3.greet();
// const obj4 = new UserObj('Bob', 45);
// console.log('obj4 ===', obj4);

// const usersArr: UserObj[] = [obj3];
// usersArr.push({ name: 'james', age: 25 }); // err
// usersArr.push(obj2);

// console.log('usersArr ===', usersArr);
