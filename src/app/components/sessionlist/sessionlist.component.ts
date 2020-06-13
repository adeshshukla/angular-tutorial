import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app1-sessionlist',
  template: `
    
    <h2> Session List </h2>

    <!-- <table border="1">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>IsActive</th>
            <th>Created Date</th>
        </tr>
    </thead>
    <tbody>
    <tr *ngFor="let session of sessionList; let i = index;">
        <app1-sessiondetail [session]="session"></app1-sessiondetail>
            <td>{{session.Id}}</td>
            <td>{{session.Name}}</td>
            <td>{{session.Description}}</td>
            <td>{{session.IsActive}}</td>
            <td>{{session.CreateTs|date}}</td>
      
    </tr>
    </tbody>
    </table> -->

    <div *ngFor="let session of sessionList; let i = index;">
        <app1-sessiondetail [value]="session" (myevent)="ParentHandler($event)"></app1-sessiondetail>
    </div>

    <div>
      <button (click)="AddNew()">Add New Session</button>
    </div>


  `,
  styles: [
  ]
})
export class SessionlistComponent implements OnInit {

  test;
  sessionList;
  sessionListAsync;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSessionList();
    // this.getSessionListAsync();
  }

  getSessionList() {
    this.sessionService.getSessionFromDB().subscribe(data => {
      console.log('Data in component')
      console.log(data);
      this.sessionList = data["Content"];
    });
  }

  getSessionListAsync() {
    this.sessionListAsync = this.sessionService.getSessionFromDB();
  }

  AddNew() {
    let session = {
      Id: 3,
      Name: "",
      Description: "Old Session",
      IsActive: true
    }
    this.sessionService.addSession(session).subscribe(
      data => {        
        alert('Added Successfull');
        console.log(data);
        this.getSessionList();
      }
      , error => console.error(error));
  }


  updateSession() {
    let session = {
      Id: 1,
      Name: "2019-20",
      Description: "Old Session",
      IsActive: true
    }
    this.sessionService.updateSession(session).subscribe(
      data => {
        alert('Update Successfull')
        this.getSessionList();
      }
      , error => console.error(error));
  }

  ParentHandler(eventArg){
    alert(eventArg);
  }

  Complete(event){
    alert(event);
  }


}
