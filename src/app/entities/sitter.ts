export class Sitter {

    //Should String wrapper object or string be used? same with boolean and number
    // ? means optional
    customerId?: string;
    _id?: string; //string remove ?
    username: string;
    password: string;
    name: string;
    female: boolean; //female if true, male if false
    birthDate: Date; //js date
    noCriminalRecord: boolean; //clean record if true
    noChildRecord: boolean; //not a child molestor if true
    hourlyWage: number;
    address: string;
    zipCode: string;
    city: string;

    //private calendar: any; //we don't know the type yet
    // ratings?: Rating[]
}

// export class Rating {
//     rating: number; //1-5
//     description: String;
//     babyId: number; //username
// }