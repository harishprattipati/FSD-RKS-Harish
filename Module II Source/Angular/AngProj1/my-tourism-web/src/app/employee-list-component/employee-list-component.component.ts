import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css']
})
export class EmployeeListComponentComponent implements OnInit {

 // employees: any[] = [{ code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
//  { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
 // { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
//  { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
 // { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
//  { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' }
//  ];

employees: any[];


  constructor() {

       this.employees = [{ code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
  { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
   { code: 'emp02', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
  { code: 'emp03', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' } ,
   { code: 'emp04', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' } ];
   }

   getEmployees(): void {
    this.employees = [{ code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
    { code: 'emp01', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
     { code: 'emp02', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
    { code: 'emp03', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
     { code: 'emp04', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' },
     { code: 'emp05', name: 'Girish', gender: 'Male', annualSalary: 3000000, dateOfBirth: '25/05/1977' }];

   }
   trackByEmpCode(index: number, employee: any): string {

     return employee.code;
   }

  ngOnInit() {
  }

}
