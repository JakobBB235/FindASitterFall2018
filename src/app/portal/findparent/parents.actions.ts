import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ApiService } from 'src/app/services/api.service';
import { Parent } from 'src/app/entities/parent';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class ParentsActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private apiService: ApiService) {} 

  // This gives a strongly typed way to call an action.
  static REGISTER_NEW_PARENT: string = 'REGISTER_NEW_PARENT'; //Create
  static SAVE_ID: string = 'SAVE_ID'; //Save ID of item about to be updated/deleted
  static UPDATE_EXISTING_PARENT: string = 'UPDATE_EXISTING_PARENT'; //Update
  static DELETE_EXISTING_PARENT: string = 'DELETE_EXISTING_PARENT'; //Delete
  static GET_ALL_PARENTS: string = 'GET_ALL_PARENTS';
  static GET_ALL_PARENTS_SUCCESS: string = 'GET_ALL_PARENTS_SUCCESS';
  static GET_ALL_PARENTS_FAILURE: string = 'GET_ALL_PARENTS_FAILURE';

  createParent(parent: Parent): void {
    parent.customerId = "jakparent"; 

    console.log("1");
    this.apiService.createSitter(parent).subscribe(response => { //Subscribing is needed to make it work. //save in DB
      console.log("3");
      console.log("CustomerID is: ", parent.customerId); //
      console.log("Response", response) //response is actually a parent object. pass on to reducer method as payload?

      this.ngRedux.dispatch({
        type: ParentsActions.REGISTER_NEW_PARENT,
        payload: parent //response
      });
    }, error => {
      console.log("Error! Parent was not created", error);
    }); 
    console.log("2");
    //1 -> 2 -> 3 Async
  }

  //Pathvariable is the best solution?
  saveId(id: string): void {
    this.ngRedux.dispatch({
      type: ParentsActions.SAVE_ID,
      payload: id
    });
    console.log("actions", id);
  }

  updateParent(parent: Parent): void { 
    this.apiService.updateSitter(parent).subscribe(response => {
      console.log("Response", response);
      this.ngRedux.dispatch({
        type: ParentsActions.UPDATE_EXISTING_PARENT,
        payload: parent //response
      });
    }, error => {
      console.log("Error! Parent was not updated", error);
    });
  }

  deleteParent(id: string): void { 
    this.apiService.deleteSitter(id).subscribe(response => { //Subscribing is needed to make it work. //delete from DB
      console.log("Response", response)
      this.ngRedux.dispatch({
        type: ParentsActions.DELETE_EXISTING_PARENT,
        payload: id
      });
    }, error => { //For some reason this always results in error, however Parent is still deleted
      console.log("Error! Parent was not deleted", error);
    }); 
  }

   //Gets all parents from API
   getAllParents(): void { //Method was modified to make progress spinner work.
    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: ParentsActions.GET_ALL_PARENTS,
      //No payload
    });

    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => { 
      const myData = responseFromApi.filter(x => x.customerId === 'jakparent');
      console.log(myData);

      //If webservice succeeds
      this.ngRedux.dispatch({
        type: ParentsActions.GET_ALL_PARENTS_SUCCESS,
        payload: myData
      });
    },  error => {
      console.log("Error! ", error);
      //If websevice fails
      this.ngRedux.dispatch({
        type: ParentsActions.GET_ALL_PARENTS_FAILURE,
        payload: error 
      });
    });
  }
}
