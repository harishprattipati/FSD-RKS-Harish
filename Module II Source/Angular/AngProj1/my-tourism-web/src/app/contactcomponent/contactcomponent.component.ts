import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactcomponent',
  template: `<div> 
  <table>
 <thead> <tr>
     <th> Employee Details </th>
      
     
   </tr> </thead>
   <tbody>
 <tr class="colorClass" [class]='classesToApply'>
   <th>First Name</th>
   <th>{{firstName}}</th>
   
 </tr>
 <tr class="colorClass" [class]='classesToApply'>
   <td>Last Name</td>
   <td>{{lastName}}</td>
   
 </tr>
 <tr class ="colorClass" [class.boldClass]= 'applyBoldClass'>
   <td>Gender</td>
   <td>{{gender}}</td>
   
 </tr>

   <tr class ="colorClass italicClass boldClass" [class.boldClass]= 'applyBoldClass'>
     
     <td>Age</td>
     <td>{{age}}</td>
     
   </tr>
    <tr  class = "colorClass" [ngClass]= 'addClasses1()'>
     
       <td>Qualification</td>
       <td>{{qualification}}</td>
       
     </tr>
 </tbody>
</table>

  
  </div>`
})
export class ContactcomponentComponent implements OnInit {

  isBold: boolean = true;
  isItalic: boolean = true;
  fontSize: number = 40;

  name: string = 'Girish Chandra';
  firstName: string = 'Girish';
  lastName: string = 'Chandra';
  gender: string = 'Male';
  age: number = 25;
  qualification: string = 'PG';



  imageName: string = 'http://tutorgirish.com/images/logo-wide.png';
  imageName1: string = 'images/logo-wide.png';

  isDisabled: boolean = false;


  classesToApply: string = 'italicClass boldClass';
 // classesToApply1: string = 'boldClass';
  applyBoldClass: boolean = true;
  applyItalicClass: boolean = false;
  applyColorClass: boolean = false;
  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    };
    return styles;
  }

  addClasses1(){
    let classes = {
    colorClass: this.applyColorClass,
     boldClass: this.applyBoldClass,
     italicClass: this.applyItalicClass
   };
    return classes;
  }

  addClasses(){
    let classes = {
     boldClass: this.applyBoldClass,
     italicClass: this.applyItalicClass
   };
    return classes;
  }
  constructor() { }

  getFullName(): string {

    return this.firstName + ' ' + this.lastName;

  }

  ngOnInit() {
  }

}



/*
<button style='color:red' [style.fontWeight]="isBold ? 'bold': 'normal'"> Works </button>
  <button style='color:red' [style.fontStyle]="isItalic ? 'italic': 'normal'"> Works </button>
  <button style='color:red' [style.font-size.px]="fontSize"> Works </button>
  <button   [ngStyle]="addStyles()"> Works </button>

  <h1> Table Header </h1>
  <h1> Hello {{name}} </h1>
  <img src='http://tutorgirish.com/{{imageName1}}'/>
  <img src='{{imageName}}'/>
  <h1> Property Binding </h1>
  <img [src] ='imageName' />
  <h1> Hello {{getFullName()}} </h1>


  <button [disabled]='isDisabled'> Click Me</button>
  <br/> <br/>
  <button bind-disabled ='isDisabled'> Click Me </button>
*/