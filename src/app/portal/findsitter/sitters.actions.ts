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
  static REGISTER_NEW_SITTER_SUCCESS: string = 'REGISTER_NEW_SITTER_SUCCESS'; //Create
  static REGISTER_NEW_SITTER_FAILURE: string = 'REGISTER_NEW_SITTER_FAILURE'; //Create
  static SAVE_ID: string = 'SAVE_ID'; //Save ID of item about to be updated/deleted
  static UPDATE_EXISTING_SITTER: string = 'UPDATE_EXISTING_SITTER'; //Update
  static DELETE_EXISTING_SITTER: string = 'DELETE_EXISTING_SITTER'; //Delete
  static ENABLE_ADMIN_AUTHORITY: string = 'ENABLE_ADMIN_AUTHORITY';
  static GET_ALL_SITTERS: string = 'GET_ALL_SITTERS';
  static GET_ALL_SITTERS_SUCCESS: string = 'GET_ALL_SITTERS_SUCCESS';
  static GET_ALL_SITTERS_FAILURE: string = 'GET_ALL_SITTERS_FAILURE';
  

  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: SittersActions.SET_REGISTER_BABYTYPE,
      payload: isBaby
    })
  }

  //Method was modified to make processing spinner work
  createSitter(sitter: Sitter): void {
    sitter.customerId = "jak123"; //This is used to find the correct data in the database

    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: SittersActions.REGISTER_NEW_SITTER,
      // NO PAYLOAD
    });

    console.log("1");
    //Action creater calls web service, and dispatches new redux action.
    this.apiService.createSitter(sitter).subscribe(response => { //Subscribing is needed to make it work. //save in DB
      console.log("3");

      //If all goes well.
      this.ngRedux.dispatch({
        type: SittersActions.REGISTER_NEW_SITTER_SUCCESS,
        payload: sitter //response
        //Response might be missing _id if bad API is used.
      });
    }, error => {
      console.log("Error! Sitter was not created", error);

      //If web service fails.
      this.ngRedux.dispatch({
        type: SittersActions.REGISTER_NEW_SITTER_FAILURE,
        payload: error //response
      });
    }); 
    console.log("2");
    //1 -> 2 -> 3 Async
  }

  //Pathvariable is the best solution?
  saveId(id: string): void {
    this.ngRedux.dispatch({
      type: SittersActions.SAVE_ID,
      payload: id
    });
    console.log("actions", id);
  }

  //Reuse createSitter?
  updateSitter(sitter: Sitter): void { 
    this.apiService.updateSitter(sitter).subscribe(response => {
      console.log("Response", response);

      this.ngRedux.dispatch({
        type: SittersActions.UPDATE_EXISTING_SITTER,
        payload: sitter //response
      });
    }, error => {
      console.log("Error! Sitter was not updated", error);
    });
  }

  deleteSitter(id: string): void { //satisfy API
    this.apiService.deleteSitter(id).subscribe(response => { //Subscribing is needed to make it work. //delete from DB
      console.log("Response", response)

      this.ngRedux.dispatch({
        type: SittersActions.DELETE_EXISTING_SITTER,
        payload: id
      });
    }, error => { //For some reason this always results in error, however sitter is still deleted
      console.log("Error! Sitter was not deleted", error);
    }); 
  }

  enableAdminAuthority(): void {
    this.ngRedux.dispatch({
      type: SittersActions.ENABLE_ADMIN_AUTHORITY,
      payload: true
    });
  }

  //Gets all sitters from API. Method was modified to make process spinner work
  getAllSitters(): boolean { //: boolean or void

    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: SittersActions.GET_ALL_SITTERS,
      //NO PAYLOAD
    });

    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => { 
      const myData = responseFromApi.filter(x => x.customerId === 'jak123');
      console.log(myData);
      console.log("TEST1")

      //If it was a success
      this.ngRedux.dispatch({
        type: SittersActions.GET_ALL_SITTERS_SUCCESS,
        payload: myData 
      });
    }, error => {
      console.log("Error! ", error);
      //If websevice fails
      this.ngRedux.dispatch({
        type: SittersActions.GET_ALL_SITTERS_FAILURE,
        payload: error 
      });
    });
    return false;
  }
}
