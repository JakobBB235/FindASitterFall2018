import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FindASitterFall2018CS';
  isBaby: boolean // = undefined;
  type: String = ''

  onClickSitter(){
    // this.title = "findASitter2"
    this.isBaby = false
    console.log("User clicked View Sitter")
  }
  onClickBaby(){
    // this.title = "findABaby2"
    this.isBaby = true
    console.log("User clicked View Baby")
  }
  onClickBaby2(){
      this.type = 'Baby'
  }
  onClickParent(){
      this.type = 'Parent'
  }
  onClickSitter2(){
      this.type = 'Sitter'
  }
}
