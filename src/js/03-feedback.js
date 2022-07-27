import { throttle } from 'lodash';

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

const form = document.querySelector(".feedback-form");
console.log(form);
const LOCALSTORAGE_KEY = "feedback-form-state";
let parsedValue;

updauteInput();

form.addEventListener("input", throttle(getInput, 500));
// autoCompleteValue(parsedValue);
// console.log(parsedValue);
form.addEventListener("submit", onSabmitForm);

function getInput(event) {
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;
    // console.log(email, message);

    const inputValue = {
        email,
        message,
    }
    // console.log("оновдюэьбся сховище");
    saveFormValue(inputValue);
}

// function getFeedback(getInput) {
//     console.log(inputValue);
//     return inputValue;
// }

function saveFormValue(inputValueEl) {
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputValueEl));
}

function updauteInput() {

    const savedValue = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedValue === null) {
        return
    }

    // parsedValue = JSON.parse(savedValue);
    parsedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(parsedValue);
    
    autoCompleteValue(parsedValue);
    // return parsedValue;
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

// return serializedState === null ? undefined : JSON.parse(serializedState);


