import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): unknown {
  //   return null;
  // }

  public transform(value: string, gender: string): string {
    let newValue = "";
    if(gender.toLowerCase() === "m"){
      newValue = "Mr. " + value;
    }
    else{
      newValue = "Miss. " + value;
    }

    return newValue;
  }

}
