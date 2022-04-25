"use strict";
console.log('html js');
const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const workerTypeSelectEl = document.querySelector('#workerType');
const payPerHourEl = document.querySelector('#payPerHour');
const formEl = document.getElementById('addPerson');
if (formEl) {
    formEl.addEventListener('submit', handleForm);
}
function handleForm(e) {
    e.preventDefault();
    console.log('js is in controll');
}
