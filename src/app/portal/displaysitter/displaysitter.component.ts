import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../../entities/sitter';
import { SittersActions } from '../findsitter/sitters.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-displaysitter',
  templateUrl: './displaysitter.component.html',
  styleUrls: ['./displaysitter.component.scss']
})
export class DisplaysitterComponent implements OnInit {
  // OLD
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter;

  constructor(private sittersActions: SittersActions, private router: Router) { }

  ngOnInit() {
  }

  onEditClick(){
    //OLD
    //Handle logic here, or pass event to parent component
    this.sitterEditClicked.emit(this.sitter);

    //Redux
    // this.sittersActions.updateSitter(this.sitter);
    // this.router.navigate(['/admin/edit-sitter']) 
  }
}
