import { SittersActions } from './sitters.actions';
import { SittersState } from '../../store';
import { tassign } from 'tassign';

const INITIAL_STATE: SittersState = {isBaby: undefined, sitters: []}

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
   
    switch (action.type) {

        // When writing the CRUD cases, look into javascips spread operator. write different cases?

        case SittersActions.SET_REGISTER_BABYTYPE:

            // Copies state, and inserts new isBaby value in new state
            // thereby "changing" the state
            // return Object.assign({}, state, {isBaby: action.payload})
            return tassign(state, { isBaby: action.payload })//libary tassign. Shows errors and shorter syntax

            // console.log(action.payload)
            // state.isBaby = action.payload; // state mutations : NO NO!!!

            // return tassign(state, { isBaby: action.payload });
            // return state;
        case SittersActions.REGISTER_NEW_SITTER:
            // Copies sitters array and adds the new sitter object to the copy
            return tassign(state, { sitters: [...state.sitters, action.payload]})
        default:
            return state;
    }
}
