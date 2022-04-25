import Employee from './Employee.js';
import Partner from './Partner.js';

export default class Ui {
  static workers: (Employee | Partner)[] = [];
  static tBodyEl = document.getElementById(
    'workers-body'
  ) as HTMLTableSectionElement | null;

  static addWorker(worker: Employee | Partner) {
    if (worker instanceof Employee || worker instanceof Partner) {
      Ui.workers.push(worker);
      Ui.generateRows();
    } else {
      console.warn('not a mployee or partner');
    }
  }

  static generateRows() {
    const tableBody = Ui.tBodyEl;
    if (!tableBody) {
      return;
    }
    tableBody.innerHTML = '';

    Ui.workers.forEach((pObj: Employee | Partner) => {
      // create new row
      const newRow: HTMLTableRowElement = tableBody.insertRow();
      newRow.innerHTML = `
        <td>${pObj.id}</td>
        <td>${pObj.name}</td>
        <td>${pObj.age}</td>
        <td>kai tipas yra employee tai ta ir parodome </td>
        <td>pay</td>
        <td>dirbo val</td>
        <td>sumoketi</td>
    `;
    });
  }
}
