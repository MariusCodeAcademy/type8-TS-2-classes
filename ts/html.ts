import Employee from './classes/Employee.js';
import Partner from './classes/Partner.js';
import Ui from './classes/Ui.js';

console.log('html js');

// 1. nustaikyti i forma. suttabdyti nuo persiuntimo
const nameEl = document.getElementById('name') as HTMLInputElement | null;
const ageEl = document.getElementById('age') as HTMLInputElement | null;
const workerTypeSelectEl = document.querySelector(
  '#workerType'
) as HTMLSelectElement | null;
const payPerHourEl = document.querySelector('#payPerHour') as HTMLInputElement | null;
const formEl = document.getElementById('addPerson') as HTMLFormElement | null;

if (formEl) {
  formEl.addEventListener('submit', handleForm);
} else {
  throw new Error('formEl nera');
}

function handleForm(e: SubmitEvent) {
  e.preventDefault();
  console.log('js is in controll');
  // create employee
  const name: string = nameEl?.value || '';
  const age: number = ageEl?.valueAsNumber || 0;
  const workerTypeVal: string = workerTypeSelectEl?.value || '';

  // patikrinti ar kuriam Employee ar partneri
  if (workerTypeVal === 'em') {
    const pay: number = payPerHourEl?.valueAsNumber || 0;
    const e1 = new Employee(name, age, pay);
    Ui.addWorker(e1);
  } else {
    const p1 = new Partner(name, age);
    Ui.addWorker(p1);
  }

  // console.log('e1 ===', e1);
  // ideti e1 i Ui masyva

  console.log('Ui ===', Ui.workers);
}

// addHours
// nusitaikyti i forma
// paimti id ir val skaiciu

// surasti employee pagal id
// iskviesti .work() metoda
