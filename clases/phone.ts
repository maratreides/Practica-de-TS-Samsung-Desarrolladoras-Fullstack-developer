export class Phone {
	constructor(private _type: string, private _phoneNumber: number) { }

	set type(type: string)
	{
		this._type = type;
	}

	get type(): string
	{
		return this._type;
	}

	set phoneNumber(phoneNumber: number)
	{
		this._phoneNumber = phoneNumber;
	}

	get phoneNumber(): number
	{
		return this._phoneNumber;
	}
}