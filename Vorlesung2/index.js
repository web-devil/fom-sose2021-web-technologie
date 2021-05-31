/*
    ZIEL: Dynamisierung (Facebook: Chat, Suche, ... )

    Wiederholung / Auffrischung: Grundlagen der Programmierung
        Datentypen § Function
        If/else
        Loop
    
    DOM-Manipulation
        Elemente
        CSS

    Events / Event Listener

    Skalierung ... ?

    AUFGABE 1: Toggle
    AUFGABE 2: Popup
    AUFGABE 3: Formular-Validierung
*/

// alert('Hello JavaScript');

// Variables & Data Types
const anInt = 1;
const aFloat = 1.7;
const aDouble = 1.7;
const aBool = true;
const aFalseBale = false;
const aString = 'Hello World';

const aComplexObject = {
    attribute1: 1,
    method1: function () {
        return 'hello world';
    },
};

const list = [1, 2, 3, 4, 5, 1.7, {}];

console.log(aComplexObject);

// if/else, switch/case
if (anInt < 100) {
    console.log('Juhu, it is below 100.');
} else if (anInt < 1000) {
    console.log('It is below 1000.');
} else {
    console.log(':(');
}

// loop
for (let i = 0; i < 10; i = i + 1) {
    console.log(i);
}

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// functions
function rocket() {
    console.log(' /\\');
    console.log('/  \\');
    console.log('|---|');
    console.log('|   |');
    console.log("'---'");
    console.log(' /\\');
    console.log('/  \\');
}

rocket();
rocket();

// DOM = Document Object Model

// create elements
var para = document.createElement('p');
para.style.display = 'block';
var node = document.createTextNode('This is new.');
para.appendChild(node);

var element = document.getElementById('app');
element.appendChild(para);

document.querySelectorAll('p');

// create event listener
var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Click me'));

var app = document.getElementById('app');
app.appendChild(btn);

btn.addEventListener('click', (event) => {
    const para = document.querySelector('p');

    if (para.style.display === 'block') {
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }
});

// CSS
btn.addEventListener('click', (event) => {
    document.querySelector('h1')[0].style.color = 'red';
});

const popupButton = document.createElement('button');
popupButton.appendChild(document.createTextNode('Open Popup'));
document.querySelector('#app').append(popupButton);
popupButton.addEventListener('click', function () {
    const popupWindow = document.createElement('div');
    // CSS classes are better!
    popupWindow.style.border = '2px solid #777';
    popupWindow.style.display = 'fixed';
    popupWindow.style.top = '20px';
    popupWindow.style.width = '350px';
    popupWindow.style.height = '200px';
    document.querySelector('body').appendChild(popupWindow);
});

/* FORMULAR VALIDIERUNG */
function validateEmail(email) {
    return email.includes('@') && email.includes('.de') && email.length > 8;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const emailField = document.querySelector('input[type=text]');
    const email = emailField.value;
    if (!validateEmail(email)) {
        emailField.style.border = '1px solid red';
    } else {
        emailField.style.border = '1px solid grey';
    }
});
