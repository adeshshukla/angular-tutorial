import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app1-public-master',
  template: `
<h2>Header</h2>
<!-- <a href="/example">Example anchor</a> -->


<!-- Dynamic menu example -->
<!-- <ul *ngFor="let menu of muneus">
  <li>
  <a [routerLink]="menu.url">{{menu.text}}</a>&nbsp;
  </li>
</ul> -->


<nav>
   
<a *ngFor="let menu of muneus" [routerLink]="menu.url">{{menu.text}}</a>&nbsp;
    
    <a routerLink="/home">Home Link</a>&nbsp;
    <a routerLink="/example">Example Link</a>&nbsp;
    <a routerLink="/paramEx/1/ade">Link with Param</a>&nbsp;
    <a routerLink="/queryEx" [queryParams]="{id:300,name:'Jitu'}">Link with query string</a>&nbsp;
    
    <a routerLink="/templateRef">Template Ref/ViewChild/ngModel Example</a>&nbsp;

    <a routerLink="/pipeDemo">Pipe Demo</a>&nbsp;
    <a routerLink="/directiveDemo">Directive Demo</a>&nbsp;
    <!-- <a routerLink="studeDetail/{{stud.Id}}">Edit</a>&nbsp; -->
</nav>

<button (click)="LoginClick()">Login </button>

<!-- <h3>Dynamically routing</h3>
<button (click)="BtnClick()"> Go to Example </button>

<button (click)="BtnClickWithParams()"> Go to with params </button>

<button (click)="BtnClickWithQueryString()"> Go to with Query String </button>

<br>
<a routerLink="second?id=1">Link with param</a>

<h3>App component page</h3> -->

<!--Side Navigation-->

<!--Body-->
<!-- <h4>Child components load...</h4> -->


<router-outlet></router-outlet>
<!--Footer-->
  `,
  styles: [
  ]
})
export class PublicMasterComponent implements OnInit {

  muneus = [{ url: '\test1', text: 'Test1' },
  { url: '\test2', text: 'Test2' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  BtnClick() {
    this.router.navigate(['/example'])
  }

  BtnClickWithParams() {
    this.router.navigate(['/paramEx', 200, 'Jitendra'])
  }

  BtnClickWithQueryString() {
    let navExtra: NavigationExtras = {
      queryParams: {
        id: 500, name: 'Abhi'
      }
    }

    this.router.navigate(['/queryEx'], navExtra);
  }
  LoginClick() {
    this.router.navigate(['portal'])
  }

}
