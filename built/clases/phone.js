"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;

class Phone {
    constructor(_type, _phoneNumber)
    {
        this._type = _type;
        this._phoneNumber = _phoneNumber;
    }

    set type(type)
    {
        this._type = type;
    }

    get type()
    {
        return this._type;
    }

    set phoneNumber(phoneNumber)
    {
        this._phoneNumber = phoneNumber;
    }

    get phoneNumber()
    {
        return this._phoneNumber;
    }
}

exports.Phone = Phone;
