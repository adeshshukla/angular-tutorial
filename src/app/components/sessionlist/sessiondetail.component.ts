import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionModel } from '../session/add-session/add-session.component';

@Component({
  selector: 'app1-sessiondetail',
  template: `
        {{session.Id}}
        {{session.Name}}
        {{session.Description}}
        {{session.IsActive}}

        <button (click)="ChildClickHandler(session.Id)"> Save </button>
        
  `,
  styles: [
  ]
})
export class SessiondetailComponent implements OnInit {

  @Input('value')
  session: SessionModel;

  @Output()
  myevent: EventEmitter<any> = new EventEmitter();

  @Output('complete')
  myComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 10000; i++) {
      if (i === 10000) {
        console.log(i);
        this.myComplete.emit('Process complete. Value = ' + this.session.Id);
      }
    }
  }

  ChildClickHandler(id) {
    console.log('Inside child... Clicked Id : ' + id);

    this.myevent.emit('Child Id : ' + id);
  }

}
