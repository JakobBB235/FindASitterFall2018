export class Sitter {

    //Should String wrapper object or string be used? same with boolean and number
    // ? means optional?
    customerId?: string;
    _id?: string; //string remove ?
    /*private*/ username: string;
    /*private*/ password: string;
    /*private*/ name: string;
    /*private*/ female: boolean; //female if true, male if false
    /*private*/ birthDate: Date; //js date
    /*private*/ noCriminalRecord: boolean; //clean record if true
    /*private*/ noChildRecord: boolean; //not a child molestor if true
    /*private*/ hourlyWage: number;
    /*private*/ address: string;
    /*private*/ zipCode: string;
    /*private*/ city: string;

    //private calendar: any; //we don't know the type yet
    // ratings?: Rating[]
}

// export class Rating {
//     rating: number; //1-5
//     description: String;
//     babyId: number; //username
// }