import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Sitter } from 'src/app/entities/sitter';
import { ApiService } from 'src/app/services/api.service';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class SittersActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private apiService: ApiService) {} 

  // This gives a strongly typed way to call an action.
  static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
  static REGISTER_NEW_SITTER: string = 'REGISTER_NEW_SITTER'; //Create
  static SAVE_ID: string = 'SAVE_ID'; //Save ID of item about to be updated/deleted
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
    console.log("1");
    this.apiService.createSitter(sitter).subscribe(response => { //Subscribing is needed to make it work. //save in DB
      console.log("3");
      this.ngRedux.dispatch({
        type: SittersActions.REGISTER_NEW_SITTER,
        payload: sitter
      });
    }, error => {
      console.log("3");
    }); 
    console.log("2");
    //1 -> 2 -> 3 Async

    // this.ngRedux.dispatch({
    //   type: SittersActions.REGISTER_NEW_SITTER,
    //   payload: sitter
    // });
  }

  saveId(id: string): void {
    this.ngRedux.dispatch({
      type: SittersActions.SAVE_ID,
      payload: id
    });
    console.log("actions", id);
  }

  //Reuse createSitter?
  updateSitter(sitter: Sitter): void { //index: number
    this.ngRedux.dispatch({
      type: SittersActions.UPDATE_EXISTING_SITTER,
      payload: sitter//{index, sitter} //delete types?
    });
  }

  deleteSitter(id: string): void { //satisfy API. (index: number)
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_EXISTING_SITTER,
      payload: id
    });
  }

  enableAdminAuthority(): void {
    this.ngRedux.dispatch({
      type: SittersActions.DELETE_EXISTING_SITTER,
      payload: true
    });
  }
}
