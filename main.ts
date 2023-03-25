import { Person } from './clases/person';
import { Address } from './clases/address';
import { Mail } from './clases/mail';
import { Phone } from './clases/phone';

function buildAgenda(): Array<Person> 
    {
        let agenda: Array<Person> = [];

        const addressPerson0: Address = new Address('Calle de las Delicias', 27, 2, 'A', 15770, 'Pueblo Paleta', 'Kanto');
        const person0: Person = new Person('Gary', 'Oak', 27, '27021996R', new Date(1996, 2, 27), 'Verde', 'Hombre', [addressPerson0], [new Mail('Personal', 'rojoelpeorentrenador@pokemon.com')], [new Phone('Personal', 611522433)], 'Entrenador pokemon');
        
        const addressPerson1: Address = new Address('Calle Medalla', 39, 3, 'B', 21002, 'Ciudad Férrica', 'Hoenn');
        const person1: Person = new Person( 'Petra', 'Tsutsuji', 21, '21112002O', new Date(2002, 11, 21), 'Verde', 'Mujer', [addressPerson1], [new Mail('Trabajo', 'entrenadorapetra@gimnasiospokemon.com')], [new Phone('Trabajo', 881933855)], 'Lider de Gimnasio');
        
        const addressPerson2: Address = new Address('Calle Hiedra', 31, 11, 'S/N', 42010, 'Ciudad Esmalte', 'Teselia');
        const person2: Person = new Person('Aloe', 'Madraza Nata', 13, '41053933L', new Date(2010, 4, 09), 'Morado', 'Mujer', [addressPerson2], [new Mail('Personal', 'aloe_vera@gmail.com')], [new Phone('Personal', 635070245)], 'Campeona de tipo normal');
        
        agenda.push(person0);
        agenda.push(person1);
        agenda.push(person2);

        return agenda;
    }

function showAgenda(agenda: Array<Person>): void 
    {
        for (const person of agenda) {
            console.log(person.showPersonInfo());
        }
    }

function addNewPersonData(
    dniNumber: string,
    newAddress: Address,
    newMail: Mail,
    newPhone: Phone): void 
    {
        for (const person of agenda) {
            if (person.dni === dniNumber) {
                person.addAddress(newAddress);
                person.addMail(newMail);
                person.addPhone(newPhone);
            }
        }
    }

function changePersonData(
    dniNumber: string,
    newAddress: Address,
    newMail: Mail,
    newPhone: Phone): void 
    {
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

const dniPerson1: string = '21112002O';
const newAddressPerson1: Address = new Address('Avenida Otoño', 55, 4, 'Q', 16468, 'Ciudad Luminalia', 'Kalos');
const newMailPerson1: Mail = new Mail('Personal', 'petratora@solo.com');
const newPhonePerson1: Phone = new Phone('Personal', 685731991);

const dniPerson2: string = '41053933L';
const changeAddressPerson2: Address = new Address('Bulevar Sur', 2, 2, 'C', 16468, 'Luminalia', 'Kalos');
const changeMailPerson2: Mail = new Mail('Trabajo', 'aloeentrenadora@gimnasiospokemon.com');
const changePhonePerson2: Phone = new Phone('Trabajo', 885333456);

addNewPersonData(dniPerson1, newAddressPerson1, newMailPerson1, newPhonePerson1);
changePersonData(dniPerson2, changeAddressPerson2, changeMailPerson2, changePhonePerson2);
showAgenda(agenda);

