import { Injectable } from '@angular/core';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class InitialStateService {

  constructor() { }

  public static getInitialSitterTestState(){ //Smart to use in tests
    //CHANGE ISBABY, ITEMID, ISADMIN: TO UNDEFINED
    return { isBaby: undefined, sitters: [ //CUSTOMERID = jak1234 in webservice it is jak123
      {customerId: 'jak1234', _id: '1', username: 'azat', password: 'secret', name: 'Azat Baran', female: false, birthDate: new Date(1995, 2, 16),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup'},

      {customerId: 'jak1234', _id: '2', username: 'chrk', password: 'secret', name: 'Christian Kirschberg', female: false, birthDate: new Date(1979, 0, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød'},

      {customerId: 'jak1234', _id: '3', username: 'salik', password: 'secret3', name: 'Salik', female: false, birthDate: new Date(1995, 1, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV'}
    ], itemId: undefined, isAdmin: undefined, isProcessing: false };
  }

  // public addSitter(sitter: Sitter): void {
  //   this.sitters.push(sitter);
  // }

  public static getInitialParentTestState(){
    return { parents: [ //CUSTOMERID = jak1234 in webservice it is jak123
      {customerId: 'jak1234', _id: '1p', username: 'Caroline', password: 'secret', name: 'Caroline', female: true,
      address: 'some', zipCode: '2600', city: 'Glostrup', 
      kids: [ {_id: '1k', name: 'Emil', female: false, birthDate: new Date(2016, 5, 14), specialNeeds: 'Alergi'}]
      },

      {customerId: 'jak1234', _id: '2p', username: 'frank', password: 'secret', name: 'Frank', female: false,
      address: 'some', zipCode: '2600', city: 'Glostrup', kids: [ 
        {_id: '2k', name: 'Sarah', female: true, birthDate: new Date(2015, 5, 14)},
        {_id: '3k', name: 'Sofie', female: true, birthDate: new Date(2016, 5, 14)}
      ]},

      {customerId: 'jak1234', _id: '3p', username: 'jan', password: 'secret', name: 'Jan', female: false,
      address: 'some', zipCode: '2600', city: 'Glostrup', kids: [ 
        {_id: '4k', name: 'John', female: false, birthDate: new Date(2014, 5, 14)},
        {_id: '5k', name: 'Brian', female: false, birthDate: new Date(2015, 5, 14)},
        {_id: '6k', name: 'Jens', female: false, birthDate: new Date(2016, 5, 14), specialNeeds: 'XL bleer'}
      ]}
    ], itemId: undefined}; //isProcessing: false 
  }
}
