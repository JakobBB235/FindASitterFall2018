import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Sitter } from "src/app/entities/sitter";

@Pipe({name: 'filterSitters'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class FilterSitters implements PipeTransform {

    transform(items: Sitter[], search: string): any{
        //custom code.
        //To give filter a parameter.   let baby of babies | filterBabies: search
        //Remember to imprort in ngmodules

        console.log(items);
        console.log(search);
        // return items; //Returns all items

        //FIX
        if(search !== undefined)
            return items.filter(x => x.name.toLowerCase().includes(search) || 
            x.zipCode.toLowerCase().includes(search)); //|| x.female.includes(search)  
        else
            return items;
    }
}

@Pipe({name: 'genderFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class GenderFilter implements PipeTransform {

    transform(female: boolean): any{
        if(female)
            return "Female";   
        else
            return "Male";
    }
}

@Pipe({name: 'criminalRecordFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class CriminalRecordFilter implements PipeTransform {
    transform(noCriminalRecord: boolean): any{

        console.log(noCriminalRecord);
        if(noCriminalRecord)
            return "";   
        else
            return "Criminal Record";
    }
}

@Pipe({name: 'childRecordFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class ChildRecordFilter implements PipeTransform {

    transform(noChildRecord: boolean): any{
        if(noChildRecord)
            return "";   
        else
            return "Child Record";
    }
}
