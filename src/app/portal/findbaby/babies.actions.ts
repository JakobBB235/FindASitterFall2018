import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ApiService } from 'src/app/services/api.service';
import { Baby } from 'src/app/entities/baby';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class BabiesActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private apiService: ApiService) {} 

  // This gives a strongly typed way to call an action.
//   static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
  static REGISTER_NEW_BABY: string = 'REGISTER_NEW_BABY'; //Create
//   static SAVE_ID: string = 'SAVE_ID'; //Save ID of item about to be updated/deleted
  static UPDATE_EXISTING_BABY: string = 'UPDATE_EXISTING_BABY'; //Update
  static DELETE_EXISTING_BABY: string = 'DELETE_EXISTING_BABY'; //Delete
//   static ENABLE_ADMIN_AUTHORITY: string = 'ENABLE_ADMIN_AUTHORITY';
  static GET_ALL_BABIES: string = 'GET_ALL_BABIES';

  // This method can be called from a component, and will dispatch an action.
  // Parameter is what we want to pass from the component to the reducer.
//   setType(isBaby: boolean): void {
//     this.ngRedux.dispatch({
//       type: BabiesActions.SET_REGISTER_BABYTYPE,
//       payload: isBaby
//     })
//   }

  createSitter(baby: Baby): void {
    console.log("1");
    this.apiService.createSitter(baby).subscribe(response => { //Subscribing is needed to make it work. //save in DB
      console.log("3");
      console.log("CustomerID is: ", baby.customerId); //
      console.log("Response", response) //response is actually a sitter object. pass on to reducer method as payload?

      this.ngRedux.dispatch({
        type: BabiesActions.REGISTER_NEW_BABY,
        payload: baby //response
      });
    }, error => {
      console.log("Error! Baby was not created", error);
    }); 
    console.log("2");
    //1 -> 2 -> 3 Async
  }

  //Pathvariable is the best solution?
//   saveId(id: string): void {
//     this.ngRedux.dispatch({
//       type: BabiesActions.SAVE_ID,
//       payload: id
//     });
//     console.log("actions", id);
//   }

  updateBaby(baby: Baby): void { 
    this.apiService.updateSitter(baby).subscribe(response => {
      console.log("Response", response);
      this.ngRedux.dispatch({
        type: BabiesActions.UPDATE_EXISTING_BABY,
        payload: baby //response
      });
    }, error => {
      console.log("Error! Baby was not updated", error);
    });
  }

  deleteBaby(id: string): void { 
    this.apiService.deleteSitter(id).subscribe(response => { //Subscribing is needed to make it work. //delete from DB
      console.log("Response", response)
      this.ngRedux.dispatch({
        type: BabiesActions.DELETE_EXISTING_BABY,
        payload: id
      });
    }, error => { //For some reason this always results in error, however baby is still deleted
      console.log("Error! Baby was not deleted", error);
    }); 
  }

//   enableAdminAuthority(): void {
//     this.ngRedux.dispatch({
//       type: BabiesActions.ENABLE_ADMIN_AUTHORITY,
//       payload: true
//     });
//   }

  //Gets all babies from API
  getAllBabies(): void {
    //Check chrk github.
    this.apiService.getAllSitters().subscribe((responseFromApi: any[]) => { 
      const myData = responseFromApi.filter(x => x.customerId === 'jak123');
      console.log(myData);

      this.ngRedux.dispatch({
        type: BabiesActions.GET_ALL_BABIES,
        payload: myData 
      });
    });
  }
}
