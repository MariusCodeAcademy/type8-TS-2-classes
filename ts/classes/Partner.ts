import Person from './Person.js';
import Project from './Project.js';

export default class Partner extends Person {
  private _projects: Project[] = [];

  constructor(name: string, age: number) {
    super(name, age);
  }

  addProject(prObj: Project): void {
    // patikrinti ar prObj yra sukurtas pagal Project clase
    if (prObj instanceof Project) {
      this._projects.push(prObj);
    } else {
      console.warn(' ❗❗❗ Not instance of Project class');
    }
  }

  workDone(prId: string): void {
    // surasti tarp _projects ta obj kurio id === prId
    const found: Project | undefined = this._projects.find(
      (prObj: Project) => prObj.id === prId
    );
    if (!found) {
      console.warn('project not found', prId);
      return;
    }
    console.log('found ===', found);
    // iskviesti jam .finishProject()
    found.finishProject();
  }

  calcPay(): number {
    // atrinkti is _projects pabaigtus darbus (filter)
    // susumuoti atliktu darbu price (reduce, forEach, map)
    // is _projects istrinti atliktu darbus (filter)
    // pranesti konsoleje apie ismokejima
    // grazinti moketina suma
    return 1;
  }
}

// [
//   { _done: true, _id: 'pr_1', _title: 'footer', _price: 150 },
//   { _done: true, _id: 'pr_2', _title: 'header', _price: 250 },
//   { _done: false, _id: 'pr_4', _title: 'about', _price: 300 },
// ];
// [
//   { _done: true, _id: 'pr_1', _title: 'footer', _price: 150 },
//   { _done: true, _id: 'pr_2', _title: 'header', _price: 250 },
// ];
// [{ _done: false, _id: 'pr_4', _title: 'about', _price: 300 }];

// 150 + 250;

// return 400;
