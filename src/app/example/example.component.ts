import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-example',
  templateUrl:'example.component.html',
  styles: [`
  .lastClass{
    color:black;
    background:lightgrey;
    font-weight:bolder;
  }

  .firstClass{
    color:black;
    background:lightgrey;
    font-weight:bolder;
  }

  .redColor{
    color:red;
  }
  .blue{
    color:blue;
  }
  .bkGrey{
    background:grey;
  }
  .bkYellow{
    background:yellow;
  }

  .oddRowCss{
    background-color:white;
    color:black;
  }
  .evenRowCss{
    background-color:lightblue;
    color:white;
  }
  `]
})

export class ExampleComponent {

  welcomeMsg = 'Welcome...!!!!';

  appName = "AKTU ERP";
  // name="Dev";

  // name2="Adesh"

  // spanText = "Hi"

  // isDisabled= true;

  // isShow = true;

  // price = 10;
  // myDate = "05/22/2020";

  // showAlert(){
  //   console.log('Button click');
  //   alert('Adesh');
  // }

  // showchanges(){
  //     console.log(this.name);
  // }

  /////////////////////////////////////// ng Class exampe 
arrCss = ['redColor', 'bkGrey'];

 objCss = {
   'redColor':true,
   'bkGrey':false,
   'bkYellow':false
 }

 getCustomCss(){
  let objCss2 = {
    'redColor':true,
    'bkGrey':true,
    'bkYellow':true
  }
   return objCss2;
 }

  /////////////////////////////////////// ng Style example 
  name = "Adesh"
isRed = true;
getStyle(){
  return 'blue'
}

getStyle2(){
  return {'color':'white', 'background': 'blue'}
}
//////////////////////////////////////////////////////// New form ///////////////////////////

  arrStudent = [
    { RollNo:1, Name:"Adesh", Class:"10", Age:16},
    {  RollNo:2, Name:"Jitendra", Class:"11", Age:17},
    { RollNo:3, Name:"Amrit", Class:"12", Age:18},
    { RollNo:4, Name:"Sadika", Class:"12", Age:35},
    { RollNo:5, Name:"Shubhi", Class:"12", Age:35},
  ];

  studRoll:number;
  studName:string
  studAge:number
  studClass:string

  isEdit = false;

  Save(){
    if(this.isEdit){
      this.Update();
    }
    else{
      this.Insert();
    }
  }

  Insert(){
    var studObj = {
      RollNo:this.studRoll,
      Name:this.studName,
      Age:this.studAge,
      Class:this.studClass
    }

    console.log(studObj);

    this.arrStudent.push(studObj);
  }

  Update(){
    
    for(let i=0; i<this.arrStudent.length;i++){
      if(this.arrStudent[i].RollNo == this.studRoll){
        this.arrStudent[i].Name =  this.studName;
        this.arrStudent[i].Age =  this.studAge;
        this.arrStudent[i].Class =  this.studClass;
      }
    }
    this.isEdit = false;
  }

  Reset(){
    this.studName = "";
    this.studAge = 0;
    this.studClass = "";
  }

  EditDetail(stud){
    this.isEdit = true;

    this.studRoll = stud.RollNo;
    this.studName = stud.Name;
    this.studAge = stud.Age;
    this.studClass = stud.Class;
  }

  getRowCss(isFirst, isLast, isOdd, isEven){
    let cssClass = "";

    if(isOdd){
      cssClass =  "oddRowCss";
    }

    if(isEven){
      cssClass =  "evenRowCss";
    }

    if(isLast){
      cssClass =  "lastClass";
    }

    // if(isFirst){
    //   cssClass = ""
    // }

    return cssClass;
  }

  refreshData(){
    let studObj = {
      RollNo:12,
      Name:"Test",
      Age:100,
      Class:"12"
    }

    this.arrStudent.push(studObj);

    let arrStudent2 = this.arrStudent;

    
  }

  trackFunction(index, stud){
    return stud.RollNo;
  }

  ////////////////////////////////// ngSwitch Example
  selectedValue;

  HandleChange(ev){
    console.log(ev.target.value);
    this.selectedValue =ev.target.value
  }
}

