import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter{
    // readonly client: string;
    // private readonly details: string;
    // amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}