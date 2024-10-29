import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'servicesFilter',
  standalone: true
})
export class ServicesFilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;
    
    let filterDateText: string = '';
    let text : string = ''
    if(filterText.includes(',')){
      text = filterText.split(',')[0];
      filterDateText = filterText.split(',')[1];
    }

    if(!text) return [];

    text = text.toLowerCase();

    return items.filter(item => item.status.toLowerCase().includes(text) &&
    this.areDatesEqual(new Date(item.fecha_orden), new Date(filterDateText))
    );
  }

   areDatesEqual = (d1:any, d2:any) => {
    
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth()  === d2.getMonth() &&
        d1.getDate() === d2.getDate() + 1
    );
   }

}
