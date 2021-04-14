import { Pipe, PipeTransform, enableProdMode } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
   return activar ? ('*').repeat(value.length): value;
  }

}
