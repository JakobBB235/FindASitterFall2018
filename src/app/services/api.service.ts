import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitter } from '../entities/sitter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllSitters(){
    return this.http.get(environment.apiUrl + "/getall");
  }

  createSitter(sitter: Sitter){ //save sitter in the action method?
    //For at komme uden om et problem(dårlig api?)
    // sitter.customerId = "chrk"; + Definer attribut i sitter entity. skriv kode i action metoden hvor man filtrerer efter dette.
    return this.http.post(environment.apiUrl + "/create", sitter, {responseType: "text"});
  }
  /*
    Middleware. rxJs
    Angular expects json to be returned from webservice. this can be changed.{responseType: "text"}
  */
}
