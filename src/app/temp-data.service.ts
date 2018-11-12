import { Injectable } from '@angular/core';
import { Sitter } from './entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  sitters: Sitter[] = [
    {username: 'azat', password: 'secret', name: 'Azat Baran', female: false, birthDate: new Date(1995, 2, 16),
    noCriminalRecord: true, noChildRecord: true, hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup'},

    {username: 'chrk', password: 'secret', name: 'Christian Kirschberg', female: false, birthDate: new Date(1979, 0, 1),
    noCriminalRecord: true, noChildRecord: true, hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød'},

    {username: 'salik', password: 'secret3', name: 'Salik', female: false, birthDate: new Date(1995, 1, 1),
    noCriminalRecord: true, noChildRecord: true, hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV'}
  ]; //Fungerer som arraylist med varierende størrelse
  constructor() { }

  public addSitter(sitter: Sitter): void {
    this.sitters.push(sitter);
  }
}