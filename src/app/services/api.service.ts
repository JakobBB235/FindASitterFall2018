import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from '../entities/sitter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  //SCUM API METHODS: //Change environment: http://angular2api1.azurewebsites.net/api/internships
  // getAllSitters(){
  //   return this.http.get(environment.apiUrl + "/getall");
  // }

  // createSitter(sitter: Sitter){ //save sitter in the action method?
  //   //For at komme uden om et problem(dårlig api?)
  //   sitter.customerId = "jak123"; // Why does this attribute not show in API?
  //   console.log("createtest");
  //   return this.http.post(environment.apiUrl + "/create", sitter, {responseType: "text"});
  // }
  // /*
  //   Middleware. rxJs
  //   Angular expects json to be returned from webservice. this can be changed.{responseType: "text"}
  // */

  //  //Not working. fix return?
  // deleteSitter(_id: string){
  //   console.log(environment.apiUrl + "/DELETE/", _id);
  //   return this.http.post(environment.apiUrl + "/DELETE/", _id);
  // }

  // //Not working
  // updateSitter(_id: string){
  //   return this.http.post(environment.apiUrl + "/Update/", _id);
  // }


  //Decide if its best to take any params || make multiple methods with same content to ensure correct param inputs.(Sitter/Parent) objects
  //REST API METHODS: //Change environment: http://angular2api2.azurewebsites.net/api/internships
  getAllSitters(){
    return this.http.get(environment.apiUrl);
  }

  createSitter(sitter: any){ //Sitter / any
    // sitter.customerId = "jak123"; // Why does this attribute not show in API?. Setting customerId in action methods instead
    return this.http.post(environment.apiUrl, sitter);
  }

  deleteSitter(_id: string){ 
    console.log("delete method called");
    console.log(environment.apiUrl + "/" + _id);
    return this.http.delete(environment.apiUrl + "/" + _id); 
  }

  updateSitter(sitter: any){ //sitter has the id. //Sitter / any
    return this.http.put(environment.apiUrl + "/" + sitter._id, sitter); 
  }
}
