import { Component, OnInit } from '@angular/core';
import { ParentsActions } from './parents.actions';
import { Parent } from 'src/app/entities/parent';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findparent',
  templateUrl: './findparent.component.html',
  styleUrls: ['./findparent.component.scss']
})
export class FindparentComponent implements OnInit {
  parents: Parent[];
  isAdmin: boolean = false;

  constructor(private parentsActions: ParentsActions, private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    this.parentsActions.getAllParents();

    this.ngRedux.select(x => x.parents).subscribe((data) => {
      this.parents = data.parents;
      //this.isAdmin = data.isAdmin;
      console.log(this.parents);
      console.log(data.parents[0].kids.length);
    });
  }

  //  onParentEditClicked(id: string) {  
  //     console.log(id);
  //     console.log("HEJ");
  //     this.parentsActions.saveId(id);
  //     this.router.navigate(['/admin/edit-sitter']);
  // }

//   onSitterDeleteClicked(id: string) { 
//     this.sittersActions.deleteSitter(id);
//   }

  onParentDetailsClicked(id: string){
    this.parentsActions.saveId(id);
    this.router.navigate(['portal/findparent/parent-details']);
  }
}
