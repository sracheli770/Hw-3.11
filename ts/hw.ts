const age = document.getElementById('age') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const username = document.getElementById('username') as HTMLInputElement;

class Validators {
    static
        checkValidAge(age: number) {
        // const age2 = Number(age.value);
        if (age > 0 && age < 120) {
            console.log("Hmmm, the age looks good!");
        }
        else {
            console.log("Hmmm, the age must be a valid number");

        }
    }
    static
        checkValidEmail(email: string) {
        if (email.indexOf("@") == -1 && email.length < 5) {
            console.log(false);
        }
        console.log(true);
    }
    static
        checkValidUserName(username: string) {
        if (username.length >= 3 && username.match(/[A-Za-z]/)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}



const modeBtn = document.getElementById('mode') as HTMLDivElement;

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
})



const contactExample = document.getElementById('contact-example') as HTMLDivElement;
const fName = document.getElementById('fname') as HTMLInputElement;
const lName = document.getElementById('lname') as HTMLInputElement;
const phone2 = document.getElementById('phone') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLDivElement;
const contactDiv = document.getElementById('contact') as HTMLDivElement;



class Contact {
    firstName: string;
    lastName: string;
    phone: number;

    constructor(firstName: string, lastName: string, phone: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}

let contacts2: Contact[] = [];
let contacts: Contact[] = [];

const p1 = { firstName: 'Moe', lastName: 'Levi', phone: 54987456321 };
const p2 = { firstName: 'Dana', lastName: 'Israel', phone: 54867656341 };

contacts2.push(p1);
contacts2.push(p2);
contacts2.forEach(c => {
    contactExample.innerHTML += `First Name: ${c.firstName}, Last Name: ${c.lastName}, Phone Number: ${c.phone} <br>`
})


btn.addEventListener('click', () => {
    const fname = fName.value;
    const lname = lName.value;
    const phone = +phone2.value;

    const person = new Contact(fname, lname, phone);
    contacts.push(person);

    contactDiv.innerHTML = '';
    contacts.forEach(c => {
        contactDiv.innerHTML += `First Name: ${c.firstName}, Last Name: ${c.lastName}, Phone Number: ${c.phone} <br>`;
    })
})