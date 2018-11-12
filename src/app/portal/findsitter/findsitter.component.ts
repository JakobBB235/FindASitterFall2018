import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../temp-data.service';
import { Sitter } from '../../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-findsitter',
  templateUrl: './findsitter.component.html',
  styleUrls: ['./findsitter.component.scss']
})
export class FindsitterComponent implements OnInit {

  sitters: Sitter[];

  constructor(private tempData: TempDataService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    });
  }

  onSitterEditClicked(sitter: Sitter) {
      console.log("Someone clicked sitter", sitter)
  }
}
