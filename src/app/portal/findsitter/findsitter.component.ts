import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../temp-data.service';
import { Sitter } from '../../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SittersActions } from './sitters.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findsitter',
  templateUrl: './findsitter.component.html',
  styleUrls: ['./findsitter.component.scss']
})
export class FindsitterComponent implements OnInit {

  sitters: Sitter[];

  constructor(private tempData: TempDataService, private ngRedux: NgRedux<IAppState>, private sittersActions: SittersActions, private router: Router) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    });
  }

  onSitterEditClicked(sitter: Sitter, index: number) {
      console.log("Someone clicked sitter", sitter);
      console.log(index);
      console.log("HEJ")
      this.sittersActions.saveIndex(index);
      this.router.navigate(['/admin/edit-sitter']) 
      // this.sittersActions.updateSitter(sitter, index);
  }
}
