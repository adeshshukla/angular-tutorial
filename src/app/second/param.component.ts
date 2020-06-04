import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app1-second',
  template: `
    <p>
      Param page
    </p>
    Student Id Param : {{studId}}
    Student Name Param : {{studName}}

    <br>
    <button (click) = "goBack()">Back</button>
  `,
  styles: [
  ]
})
export class ParamComponent implements OnInit {
  studId;
  studName;

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(x => {
    //   this.paramValue = x['id'];
    // })

      // uri : localhost:4200/paramEx/1/adesh
      // /1/adesh : parameters
    this.studId = this.route.snapshot.paramMap.get('id');
    this.studName = this.route.snapshot.paramMap.get('name');
    
  }

  goBack(){
    this.location.back();
  }

}
