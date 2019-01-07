import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from '../app/portal/findsitter/sitters.reducer';
import { Sitter } from './entities/sitter';
import { Parent } from './entities/parent';
import { parentsReducer } from './portal/findparent/parents.reducer';

export class SittersState {
    isBaby: boolean; //replace with isParent
    // isParent: boolean;
    sitters: Sitter[];
    itemId: string; //used for updating a specific sitter or baby. use pathvariable instead?
    isAdmin: boolean; //= false;
    // clickedObject: any; //alternative to itemId

    isProcessing: boolean; //Spinner
}

export class ParentsState {
    // isParent: boolean;
    parents: Parent[];
    itemId: string;
    isProcessing: boolean; //Spinner
}

// My app's state is defined here. Every variable that my application needs,
// should be here.
export class IAppState {
    sitters?: SittersState;
    parents?: ParentsState;
}
export const rootReducer = combineReducers<IAppState>({
    sitters: sittersReducer,
    parents: parentsReducer
    // router: routerReducer
});
