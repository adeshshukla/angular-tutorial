import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app1-dynamic-rows',
  templateUrl: './dynamic-rows.component.html',
  styles: [
  ]
})
export class DynamicRowsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  frmGroup = this.formBuilder.group({
    name: new FormControl(''),
    desc: new FormControl(''),
    isActive: new FormControl()
  });

  frmSession = this.formBuilder.group({
    controlRow: new FormArray([this.frmGroup])
  });

  ngOnInit(): void {
  }

  AddNewRow() {
    (<FormArray>this.frmSession.controls.controlRow).push(
      this.formBuilder.group({
        name: new FormControl(''),
        desc: new FormControl(''),
        isActive: new FormControl()
      }))
  }

  DeleteRow(index){
    var controls= (<FormArray>this.frmSession.controls.controlRow);

    controls.removeAt(index);

  }

  Save(){
    console.log(this.frmSession.controls.controlRow.value);
  }
}
