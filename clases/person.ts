import { Address } from './address';
import { Phone } from './phone';
import { Mail } from './mail';

export class Person {
	constructor(private _name: string, private _lastName: string, private _age: number, private _dni: string, private _birthday: Date, private _favColor: string, private _gender: string, private _addresses: Array<Address>, private _mails: Array<Mail>, private _phones: Array<Phone>, private _note: string) { }

	set name(name: string)
	{
		this._name = name;
	}

	set lastName(lastName: string)
	{
		this._lastName = lastName;
	}

	set age(age: number)
	{
		this._age = age;
	}

	set dni(dni: string)
	{
		this._dni = dni;
	}

	set birthday(birthday: Date)
	{
		this._birthday = birthday;
	}

	set favColor(favColor: string)
	{
		this._favColor = favColor;
	}

	set gender(gender: string)
	{
		this._gender = gender;
	}

	set addresses(addresses: Array<Address>)
	{
		this._addresses = addresses;
	}

	set mails(mails: Array<Mail>)
	{
		this._mails = mails;
	}

	set phones(phones: Array<Phone>)
	{
		this._phones = phones;
	}

	set note(note: string)
	{
		this._note = note;
	}

	get name(): string
	{
		return this._name;
	}

	get lastName(): string
	{
		return this._lastName;
	}

	get age(): number
	{
		return this._age;
	}

	get dni(): string
	{
		return this._dni;
	}

	get birthday(): Date
	{
		return this._birthday;
	}

	get favColor(): string
	{
		return this._favColor;
	}

	get gender(): string
	{
		return this._gender;
	}

	get addresses(): Array<Address>
	{
		return this._addresses;
	}

	get mails(): Array<Mail>
	{
		return this._mails;
	}

	get phones(): Array<Phone>
	{
		return this._phones;
	}

	get note(): string
	{
		return this._note;
	}

	addAddress(newAddress: Address): void
	{
		this._addresses.push(newAddress);
	}

	addMail(newMail: Mail): void
	{
		this._mails.push(newMail);
	}

	addPhone(newPhone: Phone): void
	{
		this._phones.push(newPhone);
	}

	setAddress(newAddress: Address): void
	{
		this._addresses = [newAddress];
	}

	setMail(newMail: Mail): void
	{
		this._mails = [newMail];
	}

	setPhone(newPhone: Phone): void
	{
		this._phones = [newPhone];
	}

	getformatBirthday(): string
	{
		let date = this._birthday;
		let formatBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
		return formatBirthday;
	}

	showAllAddresses(): string
	{
		let allAddresses: string = '';

		for (let i = 0; i < this._addresses.length; i++) {
			allAddresses = `${allAddresses}\n\tDirección ${i + 1}: ${this._addresses[
				i
			].showAddress()}`;
		}

		return allAddresses;
	}

	showAllPhones(): string
	{
		let allPhones: string = '';

		for (let i = 0; i < this._phones.length; i++) {
			allPhones = `${allPhones}\n\tTeléfono ${i + 1}: ${this._phones[i].phoneNumber
				} (${this._phones[i].type})`;
		}

		return allPhones;
	}

	showAllEmails(): string
	{
		let allEmail: string = '';

		for (let i = 0; i < this._mails.length; i++) {
			allEmail = `${allEmail}\n\tEmail ${i + 1}: ${this._mails[i].email} (${this._mails[i].type
				})`;
		}

		return allEmail;
	}

	showPersonInfo(): string
	{
		let personInfo: string = `Información personal de ${this._name} ${this._lastName}:
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