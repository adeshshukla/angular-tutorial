import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-secure-home',
  template: `
    <p>
      secure-home Master Page
    </p>
    <nav>
      <a routerLink="dashboard">Dashboard</a>&nbsp;
      <a routerLink="studList">Student List</a>&nbsp;
      <a routerLink="sessionList">Session List</a>&nbsp;
      <a routerLink="addSession">Add Session Template</a>&nbsp;
      <a routerLink="addSessionReactive">Add Session Reactive</a>&nbsp;
      
    </nav>  

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SecureHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
