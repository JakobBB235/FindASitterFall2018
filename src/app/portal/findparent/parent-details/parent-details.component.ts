import { Component, OnInit } from '@angular/core';
import { Kid, Parent } from 'src/app/entities/parent';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.scss']
})
export class ParentDetailsComponent implements OnInit {

  kids: Kid[];
  clickedParent: Parent;
  constructor(private ngRedux: NgRedux<IAppState>) { } 

  ngOnInit() {
    this.ngRedux.select(x => x.parents).subscribe((data) => {
      this.clickedParent = data.parents.filter(x => x._id === data.itemId)[0] //only one with matching id so always index 0
      this.kids = this.clickedParent.kids;
      //this.isAdmin = data.isAdmin;
      console.log(this.kids);
    });

    // this.kids = this.clickedParent.kids;
  }
}
