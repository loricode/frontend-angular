import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';


//services
import { OrdersService } from '../../../../data/orders/orders.service';

//domain
import { Order } from '../../../../domain/interfaces/orders';
import { ServicesFilterPipe } from '../../../../data/filters/services-filter.pipe';



@Component({
  selector: 'app-services',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, HeaderOptionComponent, SearchComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  isOpen = false;
  selectedDate = new FormControl('');
  private ordersService = inject(OrdersService);
  filterText = 'Asignada'+',' + new Date().toISOString().split('T')[0];
  tempText = 'Asignada';
  selectStatus= new FormControl('Asignada');
  listOrders: Order[] = [];

  ngOnInit(): void {
    this.selectedDate.setValue(new Date().toISOString().split('T')[0])
    this.getList();
  }

  private getList = () => {
    
    this.ordersService.getListOrders().subscribe({
      next : (value) => {
       this.listOrders = value;
      }
    });
     
  }


  public openModalNewTechnician = () => {
    this.handleModal();
  }

  public handleModal = () => {
   this.isOpen = !this.isOpen;
  }

  public getStringAvatar = (text:string) => { 
   return stringAvatar(text)

  }

  public getColorAvatar = (text:string) => { 
   return { 'background-color': stringToColor(text) }

  }

  public search = (text:any) => {
    this.filterText = text
  } 

  public filteredServices(): any[] {
    return new ServicesFilterPipe().transform(this.listOrders, this.filterText);
  }

  public setStatus = (event:any) => {
    this.tempText = event.target.value;
    this.filterText = event.target.value + ','+ this.selectedDate.value
  }

  public setDateFilter = (event:any) => {
   
    this.selectedDate.setValue(event.target.value);
    this.filterText = this.tempText +',' + event.target.value

   }

}
