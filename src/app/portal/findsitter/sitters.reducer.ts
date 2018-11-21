import { SittersActions } from './sitters.actions';
import { SittersState } from '../../store';
import { tassign } from 'tassign';
import { Sitter } from 'src/app/entities/sitter';
import { InitialStateService } from 'src/app/services/initial-state.service';

// const INITIAL_STATE: SittersState = {isBaby: undefined, sitters: [], itemIndex: undefined, isAdmin: undefined}
const INITIAL_STATE: SittersState = InitialStateService.getInitialSitterTestState();

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function sittersReducer(state: SittersState = INITIAL_STATE, action:any) {
   
    switch (action.type) {

        // When writing the CRUD cases, look into javascript spread operator.
        case SittersActions.SET_REGISTER_BABYTYPE: //action.payload = boolean
            // Copies state, and inserts new isBaby value in new state, thereby "changing" the state
            // return Object.assign({}, state, {isBaby: action.payload}) //Without tassign libary
            return tassign(state, { isBaby: action.payload })//libary tassign. Shows errors and shorter syntax
            // state.isBaby = action.payload; // state mutations : NO NO!!!

        case SittersActions.REGISTER_NEW_SITTER: //action.payload = Sitter
            // Copies sitters array and adds the new sitter object to the copy
            return tassign(state, { sitters: [...state.sitters, action.payload]})

        case SittersActions.SAVE_ID: //action.payload = string (id of item)
            return tassign(state, { itemId: action.payload })

        case SittersActions.UPDATE_EXISTING_SITTER: //Not working. //action.payload = Sitter (updated sitter)
            //OLD
            // let sitter = state.sitters[action.payload.index]
            // let updatedSitter = {
            //     ...sitter,                
            //     ...action.payload.sitter
            // };
            // let sitters = [...state.sitters];
            // sitters[action.payload.index] = updatedSitter;
            // return {
            //     ...state, sitters: sitters
            // }

            //NEW
            let sitterList = state.sitters.filter(sitter => sitter._id !== action.payload._id);
            sitterList.push(action.payload);
            return tassign(state, { sitters: sitterList})

            //NEW2
            // let sitterList = state.sitters;
            // let indexOfItemToBeUpdated: number = sitterList.findIndex(x => x._id === action.payload._id)
            // sitterList[indexOfItemToBeUpdated] = action.payload;
            // return tassign(state, { sitters: sitterList })
        case SittersActions.DELETE_EXISTING_SITTER: //action.payload = string (id of sitter)
            return tassign(state, { sitters: state.sitters.filter(sitter => sitter._id !== action.payload) });

        case SittersActions.ENABLE_ADMIN_AUTHORITY: //action.payload = boolean
            return tassign(state, { isAdmin: action.payload })

        case SittersActions.GET_ALL_SITTERS: //action.payload = Sitter[] (all sitters from API)
            // return tassign(state, { sitters: [...state.sitters, ...action.payload]});
            return tassign(state, { sitters: [...state.sitters.filter(sitter => sitter.customerId !== 'jak123'), ...action.payload]})
        default:
            return state;
    }
}
