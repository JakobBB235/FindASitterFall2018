export class Baby {
    customerId?: string;
    _id?: string; //string remove ?
    username: string;
    password: string;
    name: string;
    female: boolean; //female if true, male if false
    birthDate: Date; //js date
    specialNeeds: string;
    address: string;
    zipCode: string;
    city: string;

    // ratings?: Rating[]
}