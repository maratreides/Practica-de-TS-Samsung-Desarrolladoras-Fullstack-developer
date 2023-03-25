"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;

class Person {
    constructor(_name, _lastName, _age, _dni, _birthday, _favColor, _gender, _addresses, _mails, _phones, _note)
    {
        this._name = _name;
        this._lastName = _lastName;
        this._age = _age;
        this._dni = _dni;
        this._birthday = _birthday;
        this._favColor = _favColor;
        this._gender = _gender;
        this._addresses = _addresses;
        this._mails = _mails;
        this._phones = _phones;
        this._note = _note;
    }

    set name(name)
    {
        this._name = name;
    }

    set lastName(lastName)
    {
        this._lastName = lastName;
    }

    set age(age)
    {
        this._age = age;
    }

    set dni(dni)
    {
        this._dni = dni;
    }

    set birthday(birthday)
    {
        this._birthday = birthday;
    }

    set favColor(favColor)
    {
        this._favColor = favColor;
    }

    set gender(gender)
    {
        this._gender = gender;
    }

    set addresses(addresses)
    {
        this._addresses = addresses;
    }

    set mails(mails)
    {
        this._mails = mails;
    }

    set phones(phones)
    {
        this._phones = phones;
    }

    set note(note)
    {
        this._note = note;
    }

    get name()
    {
        return this._name;
    }

    get lastName()
    {
        return this._lastName;
    }

    get age()
    {
        return this._age;
    }

    get dni()
    {
        return this._dni;
    }

    get birthday()
    {
        return this._birthday;
    }

    get favColor()
    {
        return this._favColor;
    }

    get gender()
    {
        return this._gender;
    }

    get addresses()
    {
        return this._addresses;
    }

    get mails()
    {
        return this._mails;
    }

    get phones()
    {
        return this._phones;
    }

    get note()
    {
        return this._note;
    }


    addAddress(newAddress)
    {
        this._addresses.push(newAddress);
    }

    addMail(newMail)
    {
        this._mails.push(newMail);
    }

    addPhone(newPhone)
    {
        this._phones.push(newPhone);
    }

    setAddress(newAddress)
    {
        this._addresses = [newAddress];
    }

    setMail(newMail)
    {
        this._mails = [newMail];
    }

    setPhone(newPhone)
    {
        this._phones = [newPhone];
    }

    getformatBirthday()
    {
        let date = this._birthday;
        let formatBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

        return formatBirthday;
    }

    showAllAddresses()
    {
        let allAddresses = '';

        for (let i = 0; i < this._addresses.length; i++) {
            allAddresses = `${allAddresses}\n\tDirección ${i + 1}: ${this._addresses[i].showAddress()}`;
        }

        return allAddresses;
    }

    showAllPhones()
    {
        let allPhones = '';

        for (let i = 0; i < this._phones.length; i++) {
            allPhones = `${allPhones}\n\tTeléfono ${i + 1}: ${this._phones[i].phoneNumber} (${this._phones[i].type})`;
        }

        return allPhones;
    }

    showAllEmails()
    {
        let allEmail = '';

        for (let i = 0; i < this._mails.length; i++) {
            allEmail = `${allEmail}\n\tEmail ${i + 1}: ${this._mails[i].email} (${this._mails[i].type})`;
        }

        return allEmail;
    }

    showPersonInfo()
    {
        let personInfo = `Información personal de ${this._name} ${this._lastName}:
            Nombre: ${this._name}
            Apellidos: ${this._lastName}
            Edad: ${this._age}
            DNI: ${this._dni}
            Cumpleaños: ${this.getformatBirthday()}
            Color Favorito: ${this._favColor}
            Sexo: ${this._gender}
            Direcciones: ${this.showAllAddresses()}
            Emails: ${this.showAllEmails()}
            Teléfonos: ${this.showAllPhones()}
            Notas: ${this._note}`;

        return personInfo;
    }
}

exports.Person = Person;