import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app1-studentlist',
  template: `
    
<h2>
Student List
</h2>

<br>

<table>
<thead>
    <tr>
        <th>S No.</th>
        <th>Roll No.</th>
        <th>Name</th>
        <th>Class</th>
        <th>Age</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
<tr *ngFor="let stud of arrStudent; let i = index;">
    
        <td>{{i+1}}</td>
        <td>{{stud.RollNo}}</td>
        <td>{{stud.Name}}</td>
        <td>{{stud.Class}}</td>
        <td>{{stud.Age}}</td>
        <td>
            <a routerLink="/studentDetail/{{stud.RollNo}}" >Edit</a>
        </td>
   
</tr>
</tbody>
</table>
  `,
  styles: [
  ]
})
export class StudentlistComponent implements OnInit {

  arrStudent;

  constructor(private demoService:DemoService, private studService2:StudentService) { }

  ngOnInit(): void {
    // this.arrStudent = this.studService.getStudentList();

    this.arrStudent = this.studService2.getStudentList();
  }
  
  EditDetail(stud){
    // this.isEdit = true;

    // this.studRoll = stud.RollNo;
    // this.studName = stud.Name;
    // this.studAge = stud.Age;
    // this.studClass = stud.Class;
  }

}
