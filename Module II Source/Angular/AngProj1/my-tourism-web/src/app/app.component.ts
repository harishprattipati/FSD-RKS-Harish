import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 columnSpan: number = 2;
 firstName: string = 'Girish';
 lastName: string = 'Chandra';
 gender: string = 'Male';
 age: number = 25;
 qualification: string = 'PG';

 classesToApply: string = 'italicClass boldClass';
 applyBoldClass: boolean = true;
 applyItalicClass: boolean = true;


 showDetails: boolean = false;

 addClasses(){
   let classes = {
    boldClass: this.applyBoldClass,
    italicClass: this.applyItalicClass
  };
   return classes;
 }

 onClick(): void {

  console.log('button clicked');
  }

  toggleDetails(): void {

    this.showDetails = !this.showDetails;

  }

}
