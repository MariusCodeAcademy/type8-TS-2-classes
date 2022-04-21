export default class Project {
    constructor(title, price) {
        this._done = false;
        this._id = `pr_${++Project.projectCount}`;
        this._title = title;
        this._price = price;
    }
    get done() {
        return this._done;
    }
    get id() {
        return this._id;
    }
    finishProject() {
        this._done = true;
    }
}
Project.projectCount = 0;
