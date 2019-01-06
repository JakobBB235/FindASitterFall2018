import { Component, OnInit } from '@angular/core';
import { ParentsActions } from './parents.actions';
import { Parent } from 'src/app/entities/parent';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Router } from '@angular/router';
import { SittersActions } from '../findsitter/sitters.actions';

@Component({
  selector: 'app-findparent',
  templateUrl: './findparent.component.html',
  styleUrls: ['./findparent.component.scss']
})
export class FindparentComponent implements OnInit {
  parents: Parent[];
  isAdmin: boolean = false;
  isProcessing: boolean = false;

  constructor(private parentsActions: ParentsActions, private ngRedux: NgRedux<IAppState>, private router: Router,
    private sittersActions: SittersActions) { }

  ngOnInit() {
    this.parentsActions.getAllParents();

    this.ngRedux.select(x => x.parents).subscribe((data) => {
      this.parents = data.parents; //Perhaps filter parents with more than 0 kids. Exclude 0 kids?
      //this.isAdmin = data.isAdmin;
      console.log(this.parents);
      console.log(data.parents[0].kids.length);

      this.isProcessing = data.isProcessing;
    });

    //Set admin value
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.isAdmin = data.isAdmin; 
    });
  }

  //  onParentEditClicked(id: string) {  
  //     console.log(id);
  //     console.log("HEJ");
  //     this.parentsActions.saveId(id);
  //     this.router.navigate(['/admin/edit-sitter']);
  // }

  onSitterDeleteClicked(id: string) { 
    this.parentsActions.deleteParent(id);
  }

  onParentDetailsClicked(id: string){
    this.parentsActions.saveId(id);
    this.router.navigate(['portal/findparent/parent-details']);
  }

  onKidCreateClicked(id: string){
    this.parentsActions.saveId(id);
    this.router.navigate(['portal/findparent/create-kid']);
  }
}
