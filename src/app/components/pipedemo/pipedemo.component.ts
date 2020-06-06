import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-pipedemo',
  template: `
<h3>String Pipes :</h3>
     {{myString}} -  {{myString|lowercase}} -  {{myString|uppercase}} -  {{myString|titlecase}}
    <br>
    String Slice pipe start index: {{myString|slice:2}} <br> String Slice pipe start/end index : {{myString|slice:2:5}}
  <button (click)="Print()"> Print</button>
  <h3>Date pipes</h3>
  Default value : {{myDate}}<br>
  Default date pipe : {{myDate|date}}<br>
  Date in 'dd/MM/YYYY' : {{myDate|date:"dd/MM/YYYY"}}<br>
  Short : {{myDate | date : "shortDate" }}<br>
  Long : {{myDate| date : "longDate"}}<br>
  Full : {{myDate| date : "fullDate"}}<br>
  Short time : {{myDate| date : "shortTime"}}<br>

  <h3>Number pipe</h3>
  {{myNumber1 | number: "3.2-3"}} 
  {{myNumber2 | number}} 

  <h3>Percentage pipe</h3>
  {{myPerc | percent: "3.2-3"}} 

  <h3>Currency pipe</h3>
  {{myPrice | currency}}  <br>
  {{myPrice | currency:"INR":'code'}} <br> 
  {{myPrice | currency:"EUR"}} <br>


  <h3>Json pipe</h3>
  {{myJson}}<br>
  {{myJson|json}}<br>
  {{myJson| slice:2:4 | json}}

  <h3>Multiple pipes</h3>
  {{myDate|date:"fullDate"|lowercase}}

  <h3>Custom pipes</h3>

  <div *ngFor="let data of myJson">
    {{data.Id}}
    {{data.Name | gender:data.Gender}}
  </div>

  `,
  styles: [
  ]
})
export class PipedemoComponent implements OnInit {

  myString: string = "aDesh shUkla"
  myDate: Date = new Date(2019,11,5); // month start from 0

  myNumber1 = "12.126724242" // {{myNumber | number : "minDigitbeforedecimal.minDigitbeAfteredecimal-maxDigitbeAfteredecimal"}}
  myNumber2 = ".3454363565364"; // default value  1.0-3

  myPerc = "0.12";

  myPrice = "12.45";

  myJson = [
    {Id:"100", Name:"Adesh", Gender:"M"},
    {Id:"101", Name:"Sadika", Gender:"F"},
    {Id:"102", Name:"Jitendra", Gender:"m"},
    {Id:"103", Name:"Yogesh", Gender:"M"},
    {Id:"104", Name:"Shubhi", Gender:"f"}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  Print(){
    console.log(this.myString);    
  }

}
