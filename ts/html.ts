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
}

function handleForm(e: SubmitEvent) {
  e.preventDefault();
  console.log('js is in controll');
}

// 2. surinkti input reiksmes
// 3. jei selectas parinktas kaip employee tai kuriam new Employee
// 4. jei selectas parinktas kaip Partner tai kuriam new Partner
// 5. kai pasikeicia select reiksme mes hide arba show payPerHour input
