"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;

class Mail {
    constructor(_type, _email)
    {
        this._type = _type;
        this._email = _email;
    }

    set type(type)
    {
        this._type = type;
    }

    get type()
    {
        return this._type;
    }

    set email(email)
    {
        this._email = email;
    }

    get email()
    {
        return this._email;
    }
}

exports.Mail = Mail;