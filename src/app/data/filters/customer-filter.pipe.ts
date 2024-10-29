import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter',
  standalone: true
})
export class CustomerFilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;

    filterText = filterText.toLowerCase();
    return items.filter(item => item.razon_social.toLowerCase().includes(filterText) || item.documento.toLowerCase().includes(filterText));
  }


}
