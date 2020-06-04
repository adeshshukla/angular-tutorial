import { Injectable } from '@angular/core';

@Injectable()
export class DemoService{

    private studList:any[] = [
        { RollNo:1, Name:"Adesh", Class:"10", Age:16},
        {  RollNo:2, Name:"Jitendra", Class:"11", Age:17},
        { RollNo:3, Name:"Amrit", Class:"12", Age:18},
        { RollNo:4, Name:"Sadika", Class:"12", Age:35},
        { RollNo:5, Name:"Shubhi", Class:"12", Age:35},
      ]; 

    public getStudentList(){
        return this.studList;
    }

}