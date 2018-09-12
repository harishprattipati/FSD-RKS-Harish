import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent  {
 


  isBold: boolean = true;
  fontSize: number = 40;
  isItalic: boolean = true;

  

  showDetails: boolean = false;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize, 
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    };
    return styles;
  }

  onClick(): void {

  console.log('button clicked');
  }

  toggleDetails(): void {

    this.showDetails = !this.showDetails;

  }

}
