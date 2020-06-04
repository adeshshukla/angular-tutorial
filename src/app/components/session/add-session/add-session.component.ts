import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-add-session',
  templateUrl: 'add-session.component.html',
  styles: [
  ]
})
export class AddSessionComponent implements OnInit {

  public newSession:SessionModel= new SessionModel();

  constructor() { }

  ngOnInit(): void {
  }

  public save():void{
    console.log(this.newSession);
  }

}

export class SessionModel{  
    Id: number;
    Name: string;
    Description: string;
    IsActive: boolean;  
}
