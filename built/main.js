"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const person_1 = require("./classes/person");
const address_1 = require("./classes/address");
const mail_1 = require("./classes/mail");
const phone_1 = require("./classes/phone");

function buildAgenda() {
    let agenda = [];
    const addressPerson0 = new address_1.Address('Calle de las Delicias', 27, 2, 'A', 15770, 'Pueblo Paleta', 'Kanto');
    const person0 = new person_1.Person('Gary', 'Oak', 27, '27021996R', new Date(1996, 2, 27), 'Verde', 'Hombre', [addressPerson0], [new mail_1.Mail('Personal', 'rojoelpeorentrenador@pokemon.com')], [new phone_1.Phone('Personal', 611522433)], 'Entrenador pokemon');
    const addressPerson1 = new address_1.Address('Calle Medalla', 39, 3, 'B', 21002, 'Ciudad Férrica', 'Hoenn');
    const person1 = new person_1.Person('Petra', 'Tsutsuji', 21, '21112002O', new Date(2002, 11, 21), 'Verde', 'Mujer', [addressPerson1], [new mail_1.Mail('Trabajo', 'entrenadorapetra@gimnasiospokemon.com')], [new phone_1.Phone('Trabajo', 881933855)], 'Lider de Gimnasio');
    const addressPerson2 = new address_1.Address('Calle Hiedra', 31, 11, 'S/N', 42010, 'Ciudad Esmalte', 'Teselia');
    const person2 = new person_1.Person('Aloe', 'Madraza Nata', 13, '41053933L', new Date(2010, 4, 09), 'Morado', 'Mujer', [addressPerson2], [new mail_1.Mail('Personal', 'aloe_vera@gmail.com')], [new phone_1.Phone('Personal', 635070245)], 'Campeona de tipo normal');
    agenda.push(person0);
    agenda.push(person1);
    agenda.push(person2);
    return agenda;
}
function showAgenda(agenda) {
    for (const person of agenda) {
        console.log(person.showPersonInfo());
    }
}
function addNewPersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.addAddress(newAddress);
            person.addMail(newMail);
            person.addPhone(newPhone);
        }
    }
}
function changePersonData(dniNumber, newAddress, newMail, newPhone) {
    for (const person of agenda) {
        if (person.dni === dniNumber) {
            person.setAddress(newAddress);
            person.setMail(newMail);
            person.setPhone(newPhone);
        }
    }
}

let agenda = buildAgenda();

showAgenda(agenda);

const dniPerson1 = '21112002O';
const newAddressPerson1 = new address_1.Address('Avenida Otoño', 55, 4, 'Q', 16468, 'Ciudad Luminalia', 'Kalos');
const newMailPerson1 = new mail_1.Mail('Personal', 'petratora@solo.com');
const newPhonePerson1 = new phone_1.Phone('Personal', 685731991);

const dniPerson2 = '41053933L';
const changeAddressPerson2 = new address_1.Address('Bulevar Sur', 2, 2, 'C', 16468, 'Luminalia', 'Kalos');
const changeMailPerson2 = new mail_1.Mail('Trabajo', 'aloeentrenadora@gimnasiospokemon.com');
const changePhonePerson2 = new phone_1.Phone('Trabajo', 885333456);

addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);

showAgenda(agenda);