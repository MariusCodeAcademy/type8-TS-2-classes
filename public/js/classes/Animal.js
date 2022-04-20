export default class Animal {
    constructor(b, f, s) {
        this.breed = b;
        this.fluffy = f;
        this.sound = s;
    }
    makeSound() {
        console.log(`${this.sound}!!!!!`);
    }
}
