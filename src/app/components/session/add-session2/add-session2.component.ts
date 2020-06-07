import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'app1-add-session2',
  templateUrl:'add-session2.component.html',
  styles: [`
    .errClass{
      color:red;
    }
  `]
})
export class AddSession2Component implements OnInit {
  @ViewChild('frmSession') myForm:ElementRef;

  course = { 
    title: 'The Complete Angular Course', 
    author: { 
       name: 'Mosh Hamedani'
    }
 } 

  public newSession:SessionModel= new SessionModel();

  public formErrors = [];

  constructor() { }

  ngOnInit(): void {
  }

  public save(frm):void{
    console.log(this.newSession);
    console.log(frm);
    console.log(frm.form.value);

    this.getFormValidationErrors(frm);

  }

  public saveValid():void{
    console.log(this.myForm);
    // console.log(this.myForm.nativeElement);

    this.getFormValidationErrors(this.myForm);

  }

  public save2(frm):void{
    console.log(frm);
  }

  getFormValidationErrors(frm) {
    // Clear previous errors
    this.formErrors = [];

    // console.log('Form errors----')
    // console.log(frm.controls);

    Object.keys(frm.controls).forEach(key => {
  // console.log('Key-----------' + key);
  // console.log((<HTMLInputElement>frm.controls[key]));
    // const controlErrors: ValidationErrors = frm.get(key).errors;
    const controlErrors: ValidationErrors = frm.controls[key].errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            let text;
            switch (keyError) {
              case 'required': text = key + ' is required!'; break;
              case 'pattern': text = `${key} has wrong pattern!`; break;
              case 'email': text = `${key} has wrong email format!`; break;
              case 'minlength': text = `${key} has wrong length! Required length: ${controlErrors[keyError].requiredLength}`; break;
              case 'areEqual': text = `${key} must be equal!`; break;
              default: text = `${key}: ${keyError}: ${controlErrors[keyError]}`;
            }

            this.formErrors.push(text);
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });

      console.log('Validation summary-----------------');
      console.log(this.formErrors);
    }

}

export class SessionModel{  
    Id: number;
    Name: string;
    Description: string;
    IsActive: boolean;  
}
