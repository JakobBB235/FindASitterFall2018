import { Component, OnInit } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SittersActions } from './sitters.actions';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-findsitter',
  templateUrl: './findsitter.component.html',
  styleUrls: ['./findsitter.component.scss'],
  // providers: [TempDataService] //Delete? Tells angular how to create it
})
export class FindsitterComponent implements OnInit {

  sitters: Sitter[];
  isAdmin: boolean = false;

  constructor(private ngRedux: NgRedux<IAppState>, private sittersActions: SittersActions, private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
      this.isAdmin = data.isAdmin;
    });

    //This makes the data visible in the network tab in chrome browser.
    this.apiService.getAllSitters().subscribe(responseFromApi => {
      console.log(responseFromApi);
    });
  }

  onSitterEditClicked(id: string) { //sitter: Sitter, 
      console.log(id);
      console.log("HEJ");
      this.sittersActions.saveId(id);
      this.router.navigate(['/admin/edit-sitter']);
  }

  onSitterDeleteClicked(id: string) { 
    this.sittersActions.deleteSitter(id);
  }
}
