import { Directive, ElementRef, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app1Mycolor]'
})
export class MycolorDirective implements OnInit {
  @Input('newColor') mycolor: any;

  
  @HostBinding('style.fontSize') mySize;

  constructor(private element: ElementRef) {

     console.log(this.element);   
    // this.element.nativeElement.style.color = "red";

    // console.log(this.element.nativeElement.value);    
    // this.element.nativeElement.value = "Jitu";
  }

  ngOnInit(): void {
    console.log( this.mycolor);    
    this.element.nativeElement.style.color = this.mycolor;// || "black";

    this.mySize = "18px";

    this.myId = "1234";
    // this.mycolor = "purple";
  }

  @HostBinding('id') myId;


  @HostListener('click') onCustomClick(){
    alert("Clicked : " + this.element.nativeElement.id);
  }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.element.nativeElement.style.color = "red";
  //   this.element.nativeElement.style.fontSize = "18px";
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.element.nativeElement.style.color = null;
  //   this.element.nativeElement.style.fontSize = "12px";
  // }

}
