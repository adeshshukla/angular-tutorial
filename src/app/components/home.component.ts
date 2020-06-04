import { Component, Input } from '@angular/core';

@Component({
  selector: 'aktu-home',
  template: `
    <h2>This is home Page ...</h2>
    <!--Interpolation-->
    {{name}}
    <hr>

    <!--Property Binding-->
    <input type="text" [value]="name" onclick="alert('Adesh')">

    <!--Event Binding-->
    <button (click)="showchanges()">CLick me</button>

   
  `,
  styles: []
})
export class HomeComponent {
    name="dev";

    showAlert(){
        alert('Adesh');
    }

    showchanges(){
        console.log(this.name);
    }
}
