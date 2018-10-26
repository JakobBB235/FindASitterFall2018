import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../entities/sitter';


@Component({
  selector: 'app-displaysitter',
  templateUrl: './displaysitter.component.html',
  styleUrls: ['./displaysitter.component.scss']
})
export class DisplaysitterComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onEditClick(){
    //Handle logic here, or pass event to parent component
    this.sitterEditClicked.emit(this.sitter);
  }
}
