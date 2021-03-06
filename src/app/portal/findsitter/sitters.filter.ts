import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Sitter } from "src/app/entities/sitter";

@Pipe({name: 'filterSitters'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class FilterSitters implements PipeTransform {

    transform(items: Sitter[], search: string): any{
        //Remember to import in ngmodules

        // console.log(items);
        // console.log(search);  
        if(search !== undefined) {
            return items.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) || 
            x.zipCode == search); 
        }
        else
            return items;
    }
}

@Pipe({name: 'genderFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class GenderFilter implements PipeTransform {

    transform(female: boolean): any{
        // console.log(female);
        let femalestr = female.toString();
        if(femalestr === 'true') {
            // console.log('if', female);
            return "Female"; 
        }  
        else {
            // console.log('else', female);
            return "Male";
        }
    }
}

@Pipe({name: 'criminalRecordFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class CriminalRecordFilter implements PipeTransform {
    transform(noCriminalRecord: boolean): any{ // boolean/string
        let test = noCriminalRecord.toString();
        // console.log('Filtertest', test);
        if(test === 'true'){
            // console.log("IF", test);
            return "";   
        }
        else if (test === 'false'){
            // console.log("ELSE", test);
            return "Criminal Record";
        }
    }
}

@Pipe({name: 'childRecordFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class ChildRecordFilter implements PipeTransform {

    transform(noChildRecord: boolean): any{ // boolean/string
        let test = noChildRecord.toString();
        // console.log('Filtertest', test);
        if(test === 'true'){
            // console.log("IF", test);
            return "";   
        }
        else if (test === 'false'){
            // console.log("ELSE", test);
            return "Child Record";
        }
    }
}
