import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app1-template-reference',
  templateUrl: 'template-reference.component.html',
  styles: [`
    .ng-invalid {
      border-color:red;
    }
  `]
})
export class TemplateReferenceComponent implements OnInit {

  @ViewChild('myInput2')
  myInputVar: ElementRef;

  myInput3;

  constructor() { }

  ngOnInit(): void {
  }

  DoSomething(myInput: HTMLInputElement) {
    console.log('Template reference--------')
    console.log(myInput)
    console.log(myInput.disabled);

    console.log('Using viewchild-----')
    console.log(this.myInputVar.nativeElement.value);
    console.log(this.myInputVar.nativeElement.disabled);

    this.myInputVar.nativeElement.disabled = true;
    console.log('Value after disabled-----')
    console.log(this.myInputVar.nativeElement.disabled);
  }

  public mySave(frm) {
    console.log(frm);
    console.log(frm.form.controls.inp1.value);
  }
}
