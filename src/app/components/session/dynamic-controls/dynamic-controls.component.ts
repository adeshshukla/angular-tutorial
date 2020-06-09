import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app1-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styles: [
  ]
})
export class DynamicControlsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  frmSession = this.formBuilder.group({
    name: new FormControl('ade', [Validators.required, Validators.minLength(5)]),
    desc: new FormControl('', Validators.required),
    email: new FormControl(''),

    contactNos: new FormArray([
      new FormControl(''),
      new FormControl(''),
    ]),
    // contactNos: new FormArray([
    //   new FormControl(''),
    //   new FormControl('')
    // ]),

    isActive: new FormControl()
  });

  ngOnInit(): void {

    this.frmSession.controls.contactNos.setValue(['12345', '12345678']);
  }

  AddContact() {

    var contactCtrls = <FormArray>this.frmSession.controls.contactNos;
    if(contactCtrls.length >= 3){
      alert('Max count reached')
    }else{
      contactCtrls.push(new FormControl(''));
    }

  }


  saveValid(frm: FormGroup) {


    console.log(frm);
    console.log(frm.controls.name.value);
    console.log(this.frmSession.get('name').value);

    console.log(frm.value)

    if (frm.valid) {
      console.log('save...!!!');
    }
    else {
      alert('form invalid')
    }
  }

  // Reset() {
  //   // reset to default values.
  //   this.frmSession.reset({
  //     isActive: true,
  //     name: '2020-2021'
  //   });
  // }

  // SetValue() {
  //   // http call
  //   // let data = http.get();

  //   let data = {
  //     Name: 'Adesh',
  //     Desc: "Desc",
  //     Email: "ades@gmail.com",
  //     isActive: true
  //   }

  //   this.frmSession.setValue({
  //     name: data.Name,
  //     desc: data.Desc,
  //     email: data.Email,
  //     isActive: data.isActive
  //   });
  // }

  // UpdateOneValue() {
  //   this.frmSession.patchValue({
  //     desc: "New dec",
  //     email: "New email",
  //   });
  // }

}
