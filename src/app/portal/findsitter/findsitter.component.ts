import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../temp-data.service';
import { Sitter } from '../../entities/sitter';

@Component({
  selector: 'app-findsitter',
  templateUrl: './findsitter.component.html',
  styleUrls: ['./findsitter.component.scss']
})
export class FindsitterComponent implements OnInit {

  constructor(private tempData: TempDataService) { }

  ngOnInit() {
  }

  onSitterEditClicked(sitter: Sitter) {
      console.log("Someone clicked sitter", sitter)
  }
}
