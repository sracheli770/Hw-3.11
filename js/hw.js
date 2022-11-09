"use strict";
const age = document.getElementById('age');
const email = document.getElementById('email');
const username = document.getElementById('username');
class Validators {
    static checkValidAge(age) {
        // const age2 = Number(age.value);
        if (age > 0 && age < 120) {
            console.log("Hmmm, the age looks good!");
        }
        else {
            console.log("Hmmm, the age must be a valid number");
        }
    }
    static checkValidEmail(email) {
        if (email.indexOf("@") == -1 && email.length < 5) {
            console.log(false);
        }
        console.log(true);
    }
    static checkValidUserName(username) {
        if (username.length >= 3 && username.match(/[A-Za-z]/)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
const modeBtn = document.getElementById('mode');
function setDarkMode() {
    let isDark = localStorage.getItem('dark-mode') === 'dark';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    else {
        document.body.classList.remove('dark-mode');
    }
}
setDarkMode();
modeBtn.addEventListener('click', () => {
    let isDark = localStorage.getItem('dark-mode') === 'dark';
    isDark = !isDark;
    localStorage.setItem('dark-mode', isDark ? 'dark' : 'light');
    setDarkMode();
});
const contactExample = document.getElementById('contact-example');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const phone2 = document.getElementById('phone');
const btn = document.getElementById('btn');
const contactDiv = document.getElementById('contact');
class Contact {
    firstName;
    lastName;
    phone;
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}
let contacts2 = [];
let contacts = [];
const p1 = { firstName: 'Moe', lastName: 'Levi', phone: 54987456321 };
const p2 = { firstName: 'Dana', lastName: 'Israel', phone: 54867656341 };
contacts2.push(p1);
contacts2.push(p2);
contacts2.forEach(c => {
    contactExample.innerHTML += `First Name: ${c.firstName}, Last Name: ${c.lastName}, Phone Number: ${c.phone} <br>`;
});
btn.addEventListener('click', () => {
    const fname = fName.value;
    const lname = lName.value;
    const phone = +phone2.value;
    const person = new Contact(fname, lname, phone);
    contacts.push(person);
    contactDiv.innerHTML = '';
    contacts.forEach(c => {
        contactDiv.innerHTML += `First Name: ${c.firstName}, Last Name: ${c.lastName}, Phone Number: ${c.phone} <br>`;
    });
});
