export class Mail {
	
	constructor(private _type: string, private _email: string) { }

	set type(type: string)
	{
		this._type = type;
	}

	get type(): string
	{
		return this._type;
	}

	set email(email: string)
	{
		this._email = email;
	}

	get email(): string
	{
		return this._email;
	}
}