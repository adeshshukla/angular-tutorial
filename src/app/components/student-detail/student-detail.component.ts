import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app1-student-detail',
  template: `
    <h2>Student Detail</h2>
    {{student.RollNo}} <br>
    {{student.Name}} <br>
    {{student.Age}} <br>
  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {

  public student:any;

  constructor(private route:ActivatedRoute, private studService: StudentService) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails(){
    let rollNo = this.route.snapshot.paramMap.get('rollNo');

    let studentList  = this.studService.getStudentList();
    this.student = studentList.filter(x=>x.RollNo == rollNo)[0];
  }

}
