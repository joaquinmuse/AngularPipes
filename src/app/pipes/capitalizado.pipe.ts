import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas : boolean = true): string {

    value = value.toLowerCase();
    let nombres = value.split(' ');
    if (todas) {
      nombres = nombres.map(nombre =>{ // map ejecuta el metodo una vez por cada elemento del array y devuelve otro array con los resultados
        return nombre[0].toUpperCase() //primer letra mayus
        + nombre.substr(1); //resto del nombre sin la primer letra
      });
     
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' '); //uno los elem de un array concatenados con un espacio
   
  }

}
