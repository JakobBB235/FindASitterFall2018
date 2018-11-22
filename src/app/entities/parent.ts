export class Parent{
    customerId?: string;
    _id?: string; //string remove ?
    username: string;
    password: string;
    name: string;
    female: boolean; //female if true, male if false
    // birthDate: Date; //js date
    address: string;
    zipCode: string;
    city: string;
    kids: Kid[];
    // ratings: Rating[];
}

export class Kid {
    _id?: string; 
    // customerId?: string;
    name: string;
    female: boolean; //female if true, male if false
    birthDate: Date; //js date
    specialNeeds?: string;
}