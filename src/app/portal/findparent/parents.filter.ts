import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Kid } from "src/app/entities/parent";

@Pipe({name: 'childCountFilter'}) //This is what you use in html.
@Injectable({providedIn: 'root'})
export class ChildCountFilter implements PipeTransform {

    transform(items: Kid[]): any{
        //Remember to import in ngmodules

        console.log(items);
        if(items != null || items != undefined)
            return items.length; //might fail if no kids
        else
            return 0;
    }
}
