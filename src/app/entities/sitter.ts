export class Sitter {
    /*private*/ username: String;
    /*private*/ password: String;
    /*private*/ name: String;
    /*private*/ female: Boolean; //female if true, male if false
    /*private*/ birthDate: Date; //js date
    /*private*/ noCriminalRecord: Boolean; //clean record if true
    /*private*/ noChildRecord: Boolean; //not a child molestor if true
    /*private*/ hourlyWage: Number;
    /*private*/ address: String;
    /*private*/ zipCode: String;
    /*private*/ city: String;

    //private calendar: any; //we don't know the type yet
    ratings?: Rating[]
}

export class Rating {
    rating: number; //1-5
    description: String;
    babyId: number; //username
}