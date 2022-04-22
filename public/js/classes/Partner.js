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
        console.log(` 👷‍♂️ Partner "${this.name}" finished ${found.title}`);
        found.finishProject();
    }
    calcPay() {
        const doneProjects = this._projects.filter((pObj) => pObj.done === true);
        console.log('doneProjects ===', doneProjects);
        let total = doneProjects.reduce((total, pObj, idx) => {
            console.log(`index: ${idx} total: ${total}`);
            return total + pObj.price;
        }, 0);
        console.log('total ===', total);
        this.clearDoneProject();
        console.log(`🤑 Partner ${this.name} is about to be payed ${total}eur`);
        return total;
    }
    clearDoneProject() {
        this._projects = this._projects.filter((pObj) => pObj.done === false);
    }
}
