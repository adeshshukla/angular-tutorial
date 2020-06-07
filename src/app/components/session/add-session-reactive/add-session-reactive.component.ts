import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app1-add-session-reactive',
  templateUrl: 'add-session-reactive.component.html',
  styles: [
  ]
})
export class AddSessionReactiveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  frmSession = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    desc: new FormControl('', Validators.required),
    email: new FormControl(''),
    isActive: new FormControl()
  });

  ngOnInit(): void {
    //this.SetValue();
  }

  saveValid(frm: FormGroup) {

    console.log(frm);
    console.log(frm.controls.name.value);
    console.log(frm.value)

    if (frm.valid) {
      console.log('save...!!!');
    }
    else {
      alert('form invalid')
    }
  }

  Reset() {
    // reset to default values.
    this.frmSession.reset({
      isActive: true,
      name: '2020-2021'
    });
  }

  SetValue() {
    // http call
    // let data = http.get();

    let data = {
      Name: 'Adesh',
      Desc: "Desc",
      Email: "ades@gmail.com",
      isActive: true
    }

    this.frmSession.setValue({
      name: data.Name,
      desc: data.Desc,
      email: data.Email,
      isActive: data.isActive
    });
  }

  UpdateOneValue() {
    this.frmSession.patchValue({
      desc: "New dec",
      email: "New email",
    });
  }

}
