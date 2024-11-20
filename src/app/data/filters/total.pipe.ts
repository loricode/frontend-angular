import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice',
  standalone: true
})
export class TotalPipe implements PipeTransform {

  transform(items: any[]): number {
    if (items.length === 0) return 0;
    let suma = 0;
    for(let i= 0; i<items.length; i++){
      suma = suma + items[i].price
    }
    return suma
  }


}
