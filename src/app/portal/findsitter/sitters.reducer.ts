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

        //Was made into 3 cases to make process spinner work
        // case SittersActions.REGISTER_NEW_SITTER: //action.payload = Sitter
        //     // Copies sitters array and adds the new sitter object to the copy
        //     return tassign(state, { sitters: [...state.sitters, action.payload]})

        // Set spinner
        case SittersActions.REGISTER_NEW_SITTER: //action.payload = Sitter
            return tassign(state, { isProcessing: true })
        //If webservice fails
        case SittersActions.REGISTER_NEW_SITTER_FAILURE:
            return tassign(state, { isProcessing: false })
        //If it succeeds   
        case SittersActions.REGISTER_NEW_SITTER_SUCCESS: //action.payload = Sitter
            // Copies sitters array and adds the new sitter object to the copy
            return tassign(state, { isProcessing: false , sitters: [...state.sitters, action.payload]})

        case SittersActions.SAVE_ID: //action.payload = string (id of item)
            return tassign(state, { itemId: action.payload })

        case SittersActions.UPDATE_EXISTING_SITTER: //Not working. //action.payload = Sitter (updated sitter)
            //NEW
            // let sitterList = state.sitters.filter(sitter => sitter._id !== action.payload._id);
            // sitterList.push(action.payload);
            // return tassign(state, { sitters: sitterList})

            //NEW2
            // get index of the sitter
            let index = state.sitters.findIndex(sitter => sitter._id == action.payload._id)

            return tassign(state, {sitters: [
              ...state.sitters.slice(0, index),
              action.payload,
              ...state.sitters.slice(index + 1)
            ]});
            
        case SittersActions.DELETE_EXISTING_SITTER: //action.payload = string (id of sitter)
            return tassign(state, { sitters: state.sitters.filter(sitter => sitter._id !== action.payload) });

        case SittersActions.ENABLE_ADMIN_AUTHORITY: //action.payload = boolean
            return tassign(state, { isAdmin: action.payload })

        //Was made into 3 cases to make process spinner work
        // case SittersActions.GET_ALL_SITTERS: //action.payload = Sitter[] (all sitters from API)
        //     //Filter ensures that multiple instances of the same sitter are not added to the state every time
        //     return tassign(state, { sitters: [...state.sitters.filter(sitter => sitter.customerId !== 'jak123'), ...action.payload]})

        case SittersActions.GET_ALL_SITTERS: //action.payload = Sitter[] (all sitters from API)
            return tassign(state, { isProcessing: true })
        case SittersActions.GET_ALL_SITTERS_SUCCESS:
            return tassign(state, { isProcessing: false, sitters: [...state.sitters.filter(sitter => sitter.customerId !== 'jak123'), ...action.payload]})
        case SittersActions.GET_ALL_SITTERS_FAILURE:
            return tassign(state, { isProcessing: false })
        default:
            return state;
    }
}
