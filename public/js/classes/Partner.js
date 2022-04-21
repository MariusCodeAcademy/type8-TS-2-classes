import Person from './Person.js';
import Project from './Project.js';
export default class Partner extends Person {
    constructor(name, age) {
        super(name, age);
        this._projects = [];
    }
    addProject(prObj) {
        if (prObj instanceof Project) {
            this._projects.push(prObj);
        }
        else {
            console.warn(' ❗❗❗ Not instance of Project class');
        }
    }
    workDone(prId) {
    }
    calcPay() {
        return 1;
    }
}
