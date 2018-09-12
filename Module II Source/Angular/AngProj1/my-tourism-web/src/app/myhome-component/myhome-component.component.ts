import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhome-component',
  template:`<div> 

<h1>{{firstName}}</h1>
<h1>{{'Name = ' + firstName}}</h1>
  <h1>{{getFullName()}}</h1>
  <h1> {{10 + 20 + 30}}</h1>
  <h1>{{'Full Name = ' +getFullName()}}</h1>

  <img src = '{{imagePath}}'/>
  <img [src] = 'imagePath'/>
  <img src = 'http://tutorgirish.com/{{imagePath1}}'/>
  <button [disabled]='isDisabled'>Click Me </button>
 <span [innerHtml]='pageHeader'> </span>
 <span bind-innerHtml='pageHeader'> </span>
 <span  innerHtml='pageHeader'> </span>
 <div [innerHtml]='badHtml'></div>
 <div> {{badHtml}} </div>
  <app-root></app-root>
  <app-my-new-component> </app-my-new-component>
  </div> `
})
export class MyhomeComponentComponent   {

  imagePath: string = 'http://tutorgirish.com/images/logo-wide.png';
  imagePath1: string = 'images/logo-wide.png';
  firstName: string = 'Girish';
  lastName: string = 'Chandra';

  isDisabled: boolean = false;
  badHtml: string = 'Hello <script> alert("test")</script>';
  pageHeader: string = 'My Details';
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
