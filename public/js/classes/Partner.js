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
        const found = this._projects.find((prObj) => prObj.id === prId);
        if (!found) {
            console.warn('project not found', prId);
            return;
        }
        console.log('found ===', found);
        found.finishProject();
    }
    calcPay() {
        return 1;
    }
}
