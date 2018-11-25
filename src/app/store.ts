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
}

export class ParentsState {
    // isParent: boolean;
    parents: Parent[];
    itemId: string;
}

// My app's state is defined here. Every variable that my application needs,
// should be here.
export class IAppState {
    sitters?: SittersState;
    // babies?: BabiesState;
    parents?: ParentsState;
}
export const rootReducer = combineReducers<IAppState>({
    sitters: sittersReducer,
    // babies: babiesReducer
    parents: parentsReducer
    // router: routerReducer
});
