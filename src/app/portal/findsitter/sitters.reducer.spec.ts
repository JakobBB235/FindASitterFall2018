var deepFreeze = require('deep-freeze'); //Checks for no state mutations
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { InitialStateService } from 'src/app/services/initial-state.service';
import { Sitter } from 'src/app/entities/sitter';

describe('sitters reducer', () => {
  //Return initial state TEST
  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual(InitialStateService.getInitialSitterTestState()); //hvis der ikke sendes noget ind, får jeg så noget tilbage?
  });

  //Toggle isBaby TEST
  it('Toggle isBaby or sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();
    let endState = InitialStateService.getInitialSitterTestState();
    endState.isBaby = true; //REMOVE?

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.SET_REGISTER_BABYTYPE, 
      payload: true 
    })).toEqual(endState);
  });

  //CREATE TEST
  it('Create sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();
    let endState = { isBaby: undefined, sitters: [ //CUSTOMERID = jak1234 in webservice it is jak123
      {customerId: 'jak1234', _id: '1', username: 'azat', password: 'secret', name: 'Azat Baran', female: false, birthDate: new Date(1995, 2, 16),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup'},

      {customerId: 'jak1234', _id: '2', username: 'chrk', password: 'secret', name: 'Christian Kirschberg', female: false, birthDate: new Date(1979, 0, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 150, address: 'some', zipCode: '3400', city: 'Hillerød'},

      {customerId: 'jak1234', _id: '3',username: 'salik', password: 'secret3', name: 'Salik', female: false, birthDate: new Date(1995, 1, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV'},

      {customerId: 'jak1234', _id: '4',username: 'jakob', password: 'bokaj', name: 'Jakob', female: false, birthDate: new Date(1995, 1, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 200, address: 'some', zipCode: '3400', city: 'Hillerød'}
    ], itemId: undefined, isAdmin: undefined};

    //Alternative endState
    // let endState = InitialStateService.getInitialSitterTestState();
    let sitterToBeCreated: Sitter = {customerId: 'jak1234', _id: '4', username: 'jakob', password: 'bokaj', name: 'Jakob', female: false, birthDate: new Date(1995, 1, 1),
    noCriminalRecord: true, noChildRecord: true, hourlyWage: 200, address: 'some', zipCode: '3400', city: 'Hillerød'};
    // endState.sitters.push(sitterToBeCreated); //Error here?

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.REGISTER_NEW_SITTER, 
      payload: sitterToBeCreated
    })).toEqual(endState);
  });

  //DELETE TEST
  it('Delete sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();
    // let endState = { isBaby: undefined, sitters: [//CUSTOMERID = jak1234 in webservice it is jak123
    //   {customerId: 'jak1234', _id: '1', username: 'azat', password: 'secret', name: 'Azat Baran', female: false, birthDate: new Date(1995, 2, 16),
    //   noCriminalRecord: true, noChildRecord: true, hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup'},

    //   {customerId: 'jak1234', _id: '3', username: 'salik', password: 'secret3', name: 'Salik', female: false, birthDate: new Date(1995, 1, 1),
    //   noCriminalRecord: true, noChildRecord: true, hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV'}
    // ], itemId: undefined, isAdmin: undefined};

    //Alternative endState
    let endState = InitialStateService.getInitialSitterTestState();
    endState.sitters = endState.sitters.filter(x => x._id !== '2');

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.DELETE_EXISTING_SITTER, 
      payload: '2'
    })).toEqual(endState);
  });

  //UPDATE TEST
  it('Update sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();

    let endState = InitialStateService.getInitialSitterTestState();
    //Hourly wage changed to 215
    let updatedSitter: Sitter = {customerId: 'jak1234', _id: '2', username: 'chrk', password: 'secret', name: 'Christian Kirschberg', female: false, birthDate: new Date(1979, 0, 1),
    noCriminalRecord: true, noChildRecord: true, hourlyWage: 215, address: 'some', zipCode: '3400', city: 'Hillerød'};
    // let sitterToBeUpdated: Sitter = endState.sitters.find(x => x._id === '2');
    // let indexOfSitterToBeUpdated: number = endState.sitters.findIndex(x => x._id === '2');
    // endState.sitters[indexOfSitterToBeUpdated] = updatedSitter;

    let indexOfSitterToBeUpdated: number = endState.sitters.findIndex(x => x._id === '2');
    endState.sitters[indexOfSitterToBeUpdated].hourlyWage = 215; //Hourly wage changed to 215

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.UPDATE_EXISTING_SITTER, //This method actually deletes a sitter and uses push to add the updated updated ends up being the last index. FIX
      payload: updatedSitter
    })).toEqual(endState);
  });
});
