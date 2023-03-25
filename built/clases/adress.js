"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;

class Address {
    constructor(_street, _number, _floor, _letter, _zipCode, _village, _province)
    {
        this._street = _street;
        this._number = _number;
        this._floor = _floor;
        this._letter = _letter;
        this._zipCode = _zipCode;
        this._village = _village;
        this._province = _province;
    }

    set street(street)
    {
        this._street = street;
    }

    set number(number)
    {
        this._number = number;
    }

    set floor(floor)
    {
        this._floor = floor;
    }

    set letter(letter)
    {
        this._letter = letter;
    }

    set zipCode(zipCode)
    {
        this._zipCode = zipCode;
    }

    set village(village)
    {
        this._village = village;
    }

    set province(province)
    {
        this._province = province;
    }

    get street()
    {
        return this._street;
    }

    get number()
    {
        return this._number;
    }

    get floor()
    {
        return this._floor;
    }

    get letter()
    {
        return this._letter;
    }

    get zipCode()
    {
        return this._zipCode;
    }

    get village()
    {
        return this._village;
    }

    get province()
    {
        return this._province;
    }

    showAddress()
    {
        let address = ` ${this._street}, ${this._number} ${this._floor}º${this._letter}
						${this._zipCode} ${this._village} (${this._province})`;
        return address;
    }
}

exports.Address = Address;