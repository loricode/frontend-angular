import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'technicalFilter',
  standalone: true
})
export class TechnicalFilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;

    filterText = filterText.toLowerCase();
    return items.filter(item => item.fullname.toLowerCase().includes(filterText) || item.documento.toLowerCase().includes(filterText));
  }

}
