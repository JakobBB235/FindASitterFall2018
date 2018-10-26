var deepFreeze = require('deep-freeze'); //Checks for no state mutations
import { sittersReducer } from './sitters.reducer';
import * as types from './sitters.actions';

describe('sitters reducer', () => {
 it('should return the initial state', () => {
   expect(sittersReducer(undefined, {})).toEqual({isBaby: undefined}); //hvis der ikke sendes noget ind, får jeg så noget tilbage?
});
it('Toggle isBaby or sitter', () => {
  //Initial state.
  let state = {isBaby: undefined};

  //Checks for state mutations.
  deepFreeze(state);

  //Expect, after calling reducer with state and action => new state is returned without mutations
  expect( sittersReducer(state, { type: types.SittersActions.SET_REGISTER_BABYTYPE, payload: true })).toEqual({isBaby: true});
});
});
