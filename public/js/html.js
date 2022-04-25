import Employee from './classes/Employee.js';
import Ui from './classes/Ui.js';
console.log('html js');
const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const workerTypeSelectEl = document.querySelector('#workerType');
const payPerHourEl = document.querySelector('#payPerHour');
const formEl = document.getElementById('addPerson');
if (formEl) {
    formEl.addEventListener('submit', handleForm);
}
else {
    throw new Error('formEl nera');
}
function handleForm(e) {
    e.preventDefault();
    console.log('js is in controll');
    const name = (nameEl === null || nameEl === void 0 ? void 0 : nameEl.value) || '';
    const age = (ageEl === null || ageEl === void 0 ? void 0 : ageEl.valueAsNumber) || 0;
    const pay = (payPerHourEl === null || payPerHourEl === void 0 ? void 0 : payPerHourEl.valueAsNumber) || 0;
    const e1 = new Employee(name, age, pay);
    console.log('e1 ===', e1);
    Ui.addWorker(e1);
    console.log('Ui ===', Ui.workers);
}
