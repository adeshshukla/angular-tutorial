import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app1-second',
  template: `
    <p>
      Query String page
    </p>

    Student Id Query String : {{qId}}
    Student Name Query String : {{qName}}

    <br>
    <button (click) = "goBack()">Back</button>
  `,
  styles: [
  ]
})
export class QueryComponent implements OnInit {

  qId;
  qName;

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
      
    // QueryString 
    // uri : localhost:4200/paramEx?id=1&name=adesh

    this.qId = this.route.snapshot.queryParamMap.get('id');
    this.qName = this.route.snapshot.queryParamMap.get('name');

    // OR
    // this.qId = this.route.snapshot.queryParams['id'];
    // this.qName = this.route.snapshot.queryParams['name'];

    // OR
    // this.route.queryParams.subscribe(p=>{
    //   this.qId = p["id"];
    //   this.qName = p["name"];
    // });
    
    
  }

  goBack(){
    this.location.back();
  }


}
