import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`  `]
})
export class AppComponent { 

  constructor(private router: Router) { }

  // LoginClick() {
  //   this.router.navigate(['portal'])
  // }
}

