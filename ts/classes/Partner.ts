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
    // iskviesti jam .finishProject()
  }

  calcPay(): number {
    // atrinkti is _projects pabaigtus darbus
    // susumuoti atliktu darbu price
    // is _projects istrinti atliktu darbus
    // pranesti konsoleje apie ismokejima
    // grazinti moketina suma
    return 1;
  }
}
