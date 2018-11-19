var deepFreeze = require('deep-freeze'); //Checks for no state mutations
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';
import { InitialStateService } from 'src/app/services/initial-state.service';

describe('sitters reducer', () => {
  it('should return the initial state', () => {
    expect(sittersReducer(undefined, {})).toEqual(InitialStateService.getInitialSitterTestState()); //hvis der ikke sendes noget ind, får jeg så noget tilbage?
  });

  //Toggle isBaby TEST
  it('Toggle isBaby or sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();
    let endState = InitialStateService.getInitialSitterTestState();

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.SET_REGISTER_BABYTYPE, 
      payload: true
    })).toEqual(endState);
  });

  //DELETE TEST
  it('Delete sitter', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialSitterTestState();
    let endState = { isBaby: undefined, sitters: [
      {_id: '1', username: 'azat', password: 'secret', name: 'Azat Baran', female: false, birthDate: new Date(1995, 2, 16),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 1337, address: 'some', zipCode: '2600', city: 'Glostrup'},

      {_id: '3',username: 'salik', password: 'secret3', name: 'Salik', female: false, birthDate: new Date(1995, 1, 1),
      noCriminalRecord: true, noChildRecord: true, hourlyWage: 100, address: 'some', zipCode: '2400', city: 'København NV'}
    ], itemIndex: undefined, isAdmin: undefined};

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( sittersReducer(startState, { 
      type: types.SittersActions.DELETE_EXISTING_SITTER, 
      payload: '2'
    })).toEqual(endState);
  });
});
