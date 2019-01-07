import { tassign } from 'tassign';
import { InitialStateService } from 'src/app/services/initial-state.service';
import { ParentsActions } from './parents.actions';
import { ParentsState } from 'src/app/store';

const INITIAL_STATE: ParentsState = InitialStateService.getInitialParentTestState();

// My reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function parentsReducer(state: ParentsState = INITIAL_STATE, action:any) {
   
    switch (action.type) {
        case ParentsActions.REGISTER_NEW_PARENT: //action.payload = Sitter
            // Copies parents array and adds the new sitter object to the copy
            return tassign(state, { parents: [...state.parents, action.payload]})

        case ParentsActions.SAVE_ID: //action.payload = string (id of item)
            return tassign(state, { itemId: action.payload })

        //Find better way to update state. state is actually not updated
        case ParentsActions.UPDATE_EXISTING_PARENT: //action.payload = Parent (updated parent)
            // get index of the parent
            let index = state.parents.findIndex(parent => parent._id == action.payload._id)

            return tassign(state, {parents: [
              ...state.parents.slice(0, index),
              action.payload,
              ...state.parents.slice(index + 1)
            ]});

        case ParentsActions.DELETE_EXISTING_PARENT: //action.payload = string (id of parent)
            return tassign(state, { parents: state.parents.filter(parent => parent._id !== action.payload) });

        //Was made into 3 cases to make process spinner work
        // case ParentsActions.GET_ALL_PARENTS: //action.payload = Parent[] (all parents from API)
        //     //Filter ensures that multiple instances of the same parent are not added to the state every time
        //     return tassign(state, { parents: [...state.parents.filter(parent => parent.customerId !== 'jakparent'), ...action.payload]})
        
        case ParentsActions.GET_ALL_PARENTS: //action.payload = Parent[] (all parents from API)
            return tassign(state, { isProcessing: true } )
        case ParentsActions.GET_ALL_PARENTS_FAILURE:
            return tassign(state, { isProcessing: false })
        case ParentsActions.GET_ALL_PARENTS_SUCCESS:
            //Filter ensures that multiple instances of the same parent are not added to the state every time
            return tassign(state, { isProcessing: false , parents: [...state.parents.filter(parent => parent.customerId !== 'jakparent'), ...action.payload]})
        default:
            return state;
    }
}
