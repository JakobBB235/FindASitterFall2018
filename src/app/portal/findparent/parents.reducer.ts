import { tassign } from 'tassign';
import { InitialStateService } from 'src/app/services/initial-state.service';
import { ParentsActions } from './parents.actions';
import { ParentsState } from 'src/app/store';

const INITIAL_STATE: ParentsState = InitialStateService.getInitialParentTestState();

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function parentsReducer(state: ParentsState = INITIAL_STATE, action:any) {
   
    switch (action.type) {

        // When writing the CRUD cases, look into javascript spread operator.
        // case ParentsActions.SET_REGISTER_BABYTYPE: //action.payload = boolean
        //     // Copies state, and inserts new isBaby value in new state, thereby "changing" the state
        //     // return Object.assign({}, state, {isBaby: action.payload}) //Without tassign libary
        //     return tassign(state, { isBaby: action.payload })//libary tassign. Shows errors and shorter syntax
        //     // state.isBaby = action.payload; // state mutations : NO NO!!!

        case ParentsActions.REGISTER_NEW_PARENT: //action.payload = Sitter
            // Copies parents array and adds the new sitter object to the copy
            return tassign(state, { parents: [...state.parents, action.payload]})

        case ParentsActions.SAVE_ID: //action.payload = string (id of item)
            return tassign(state, { itemId: action.payload })

        case ParentsActions.UPDATE_EXISTING_PARENT: //Not working. //action.payload = Parent (updated parent)
            //NEW
            let parentList = state.parents.filter(parent => parent._id !== action.payload._id);
            parentList.push(action.payload);
            return tassign(state, { parents: parentList})

            //NEW2
            // let sitterList = state.sitters;
            // let indexOfItemToBeUpdated: number = sitterList.findIndex(x => x._id === action.payload._id)
            // sitterList[indexOfItemToBeUpdated] = action.payload;
            // return tassign(state, { sitters: sitterList })
        case ParentsActions.DELETE_EXISTING_PARENT: //action.payload = string (id of parent)
            return tassign(state, { parents: state.parents.filter(parent => parent._id !== action.payload) });

        // case ParentsActions.ENABLE_ADMIN_AUTHORITY: //action.payload = boolean
        //     return tassign(state, { isAdmin: action.payload })

        case ParentsActions.GET_ALL_PARENTS: //action.payload = Parent[] (all parents from API)
            //Filter ensures that multiple instances of the same parent are not added to the state every time
            return tassign(state, { parents: [...state.parents.filter(parent => parent.customerId !== 'jakparent'), ...action.payload]})
        default:
            return state;
    }
}
