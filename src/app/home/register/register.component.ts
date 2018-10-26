import { Component, OnInit } from '@angular/core';
import { SittersActions } from './../../portal/findsitter/sitters.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isBaby: boolean; //Redux

  constructor(private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    //Redux. Here the component subscribes to the sitters state.
    // When someone changes the sitters state, this function is called,
    // Setting the isBaby variable to be the value of the isBaby var. in the state.
    this.ngRedux.select(state => state.sitters).subscribe((sitterState) => {
      this.isBaby = sitterState.isBaby;
    })
  }

}
