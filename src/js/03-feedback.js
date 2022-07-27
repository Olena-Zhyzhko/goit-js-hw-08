import { throttle } from 'lodash';

const form = document.querySelector(".feedback-form");
console.log(form);
const LOCALSTORAGE_KEY = "feedback-form-state";
let parsedValue;

updauteInput();

form.addEventListener("input", throttle(getInput, 2000));
form.addEventListener("submit", onSabmitForm);

function getInput(event) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    console.log(email, message);

    const inputValue = {
        email,
        message,
    }

    saveFormValue(inputValue);
}


function saveFormValue(inputValueEl) {
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputValueEl));
}

function updauteInput() {

    const savedValue = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedValue === null) {
        return
    }

    parsedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(parsedValue);
    
    autoCompleteValue(parsedValue);
}

function autoCompleteValue(valueEl) {
    form.elements.email.value = valueEl.email;
    form.elements.message.value = valueEl.message;
}

function onSabmitForm(event, parsedValue) {
    event.preventDefault();
        // getFeedback(getInput);
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    // console.log(parsedValue);
    clinerLocStor();
}

function clinerLocStor() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.elements.email.value = "";
    form.elements.message.value = "";
}



