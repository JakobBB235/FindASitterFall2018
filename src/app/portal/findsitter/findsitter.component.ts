import { Component, OnInit } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SittersActions } from './sitters.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findsitter',
  templateUrl: './findsitter.component.html',
  styleUrls: ['./findsitter.component.scss'],
  // providers: [TempDataService] //Delete? Tells angular how to create it
})
export class FindsitterComponent implements OnInit {

  sitters: Sitter[];
  isAdmin: boolean = false;

  constructor(private ngRedux: NgRedux<IAppState>, private sittersActions: SittersActions, private router: Router) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
      this.isAdmin = data.isAdmin;
    });
  }

  onSitterEditClicked(index: number) { //sitter: Sitter, 
      // console.log("Someone clicked sitter", sitter);
      console.log(index);
      console.log("HEJ")
      this.sittersActions.saveIndex(index);
      this.router.navigate(['/admin/edit-sitter']) 
      // this.sittersActions.updateSitter(sitter, index);
  }

  onSitterDeleteClicked(index: number) {
    this.sittersActions.deleteSitter(index);
  }
}
