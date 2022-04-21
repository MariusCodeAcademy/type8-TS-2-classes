export default class Project {
    constructor(title, price) {
        this._done = false;
        this._id = `pr_${Math.round(Math.random() * 100000000)}`;
        this._title = title;
        this._price = price;
    }
    get done() {
        return this._done;
    }
    finishProject() {
        this._done = true;
    }
}
