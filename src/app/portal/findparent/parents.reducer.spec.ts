var deepFreeze = require('deep-freeze'); //Checks for no state mutations
import { parentsReducer } from './parents.reducer';
import * as types from './parents.actions';
import { InitialStateService } from 'src/app/services/initial-state.service';
import { Parent } from 'src/app/entities/parent';

describe('parents reducer', () => {
  //Return initial state TEST
  it('should return the initial state', () => {
    expect(parentsReducer(undefined, {})).toEqual(InitialStateService.getInitialParentTestState()); //hvis der ikke sendes noget ind, får jeg så noget tilbage?
  });

  // Toggle isbaby is not used anymore
//   //Toggle isBaby TEST
//   it('Toggle isBaby or sitter', () => {
//     //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
//     let startState = InitialStateService.getInitialSitterTestState();
//     let endState = InitialStateService.getInitialSitterTestState();
//     endState.isBaby = true; //REMOVE?

//     //Checks for state mutations.
//     deepFreeze(startState);

//     //Expect, after calling reducer with state and action => new state is returned without mutations
//     expect( sittersReducer(startState, { 
//       type: types.SittersActions.SET_REGISTER_BABYTYPE, 
//       payload: true 
//     })).toEqual(endState);
//   });

  //CREATE TEST
  it('Create parent', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialParentTestState();
    let endState = { parents: [ //CUSTOMERID = jak1234 in webservice it is jak123
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
        ]},

        {customerId: 'jak1234', _id: '4p', username: 'per', password: 'secret', name: 'Per', female: false,
        address: 'some', zipCode: '2600', city: 'Glostrup', kids: [ 
          {_id: '7k', name: 'Marie', female: true, birthDate: new Date(2011, 5, 14)}
        ]}
      ], itemId: undefined, isProcessing: false };

    //Alternative endState
    // let endState = InitialStateService.getInitialSitterTestState();
    let parentToBeCreated: Parent = {customerId: 'jak1234', _id: '4p', username: 'per', password: 'secret', name: 'Per', female: false,
    address: 'some', zipCode: '2600', city: 'Glostrup', kids: [ 
      {_id: '7k', name: 'Marie', female: true, birthDate: new Date(2011, 5, 14)}
    ]};
    // endState.parents.push(parentToBeCreated); //Error here?

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( parentsReducer(startState, { 
      type: types.ParentsActions.REGISTER_NEW_PARENT, 
      payload: parentToBeCreated
    })).toEqual(endState);
  });

  //DELETE TEST
  it('Delete parent', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialParentTestState();
    let endState = InitialStateService.getInitialParentTestState();
    endState.parents = endState.parents.filter(x => x._id !== '2');

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( parentsReducer(startState, { 
      type: types.ParentsActions.DELETE_EXISTING_PARENT, 
      payload: '2'
    })).toEqual(endState);
  });

  //UPDATE TEST
  it('Update parent', () => {
    //Initial state. Makes sense to create a method initializing this to avoid changing all places if more than one test.
    let startState = InitialStateService.getInitialParentTestState();

    let endState = InitialStateService.getInitialParentTestState();
    //Another kid added: Christian
    let updatedParent: Parent = {customerId: 'jak1234', _id: '2p', username: 'frank', password: 'secret', name: 'Frank', female: false,
    address: 'some', zipCode: '2600', city: 'Glostrup', kids: [ 
      {_id: '1k', name: 'Sarah', female: true, birthDate: new Date(2015, 5, 14)},
      {_id: '2k', name: 'Sofie', female: true, birthDate: new Date(2016, 5, 14)},
      {_id: '7k', name: 'Christian', female: true, birthDate: new Date(2017, 5, 14)}
    ]};

    let indexOfParentToBeUpdated: number = endState.parents.findIndex(x => x._id === '2');
    endState.parents[indexOfParentToBeUpdated].kids.push({_id: '7k', name: 'Christian', female: true, birthDate: new Date(2017, 5, 14)});
    // endState.parents[indexOfParentToBeUpdated] = updatedParent;

    //Checks for state mutations.
    deepFreeze(startState);

    //Expect, after calling reducer with state and action => new state is returned without mutations
    expect( parentsReducer(startState, { 
      type: types.ParentsActions.UPDATE_EXISTING_PARENT, //This method actually deletes a sitter and uses push to add the updated updated ends up being the last index. FIX
      payload: updatedParent
    })).toEqual(endState);
  });
});
