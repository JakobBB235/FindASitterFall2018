import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Sitter } from 'src/app/entities/sitter';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class SittersActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>) {} 

  // This gives a strongly typed way to call an action.
  static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
  static REGISTER_NEW_SITTER: string = 'REGISTER_NEW_SITTER'; //Create
  static SAVE_INDEX: string = 'SAVE_INDEX'; //Save index of item about to be updated/deleted
  static UPDATE_EXISTING_SITTER: string = 'UPDATE_EXISTING_SITTER'; //Update
  static DELETE_EXISTING_SITTER: string = 'DELETE_EXISTING_SITTER'; //Delete
  static ENABLE_ADMIN_AUTHORITY: string = 'ENABLE_ADMIN_AUTHORITY';

  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: SittersActions.SET_REGISTER_BABYTYPE,
      payload: isBaby
    })
  }

  createSitter(sitter: Sitter): void {
    this.ngRedux.dispatch({
      type: SittersActions.REGISTER_NEW_SITTER,
      payload: sitter
    })
  }

  saveIndex(index: number): void {
    this.ngRedux.dispatch({
      type: SittersActions.SAVE_INDEX,
      payload: index
    })
    console.log("actions", index);
  }

  //Reuse createSitter?
  updateSitter(sitter: Sitter, index: number): void {
    this.ngRedux.dispatch({
      type: SittersActions.UPDATE_EXISTING_SITTER,
      payload: {index: Number, sitter: Sitter} //delete types?
    })
  }

  deleteSitter(index: number): void { //satisfy API
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_EXISTING_SITTER,
      payload: index
    })
  }

  enableAdminAuthority(): void {
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_EXISTING_SITTER,
      payload: true
    })
  }
}
