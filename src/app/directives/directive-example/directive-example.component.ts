import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app1-directive-example',
  templateUrl: './directive-example.component.html',
  styles: [
  ]
})
export class DirectiveExampleComponent implements OnInit {

  customcolor = "green";
  
  constructor() { }

  ngOnInit(): void {
  }
}
