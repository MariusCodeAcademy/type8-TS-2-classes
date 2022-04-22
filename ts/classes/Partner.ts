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
    console.log(` 👷‍♂️ Partner "${this.name}" finished ${found.title}`);
    // iskviesti jam .finishProject()
    found.finishProject();
  }

  calcPay(): number {
    // atrinkti is _projects pabaigtus darbus (filter)
    const doneProjects: Project[] = this._projects.filter(
      (pObj: Project) => pObj.done === true
    );
    console.log('doneProjects ===', doneProjects);
    // debugger;
    // let total: number = 0;
    // doneProjects.forEach((pObj: Project) => {
    //   total = total + pObj.price;
    //   // debugger;
    // });
    // debugger;
    let total = doneProjects.reduce((total: number, pObj: Project, idx: number) => {
      // console.log(`index: ${idx} total: ${total}`);
      return total + pObj.price;
    }, 0);

    // console.log('total ===', total);
    // susumuoti atliktu darbu price (reduce, forEach, map)
    // is _projects istrinti atliktu darbus (filter)
    this.clearDoneProject();
    // pranesti konsoleje apie ismokejima
    console.log(`🤑 Partner ${this.name} is about to be payed ${total}eur`);
    // grazinti moketina suma
    return total;
  }
  clearDoneProject(): void {
    this._projects = this._projects.filter((pObj: Project) => pObj.done === false);
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
