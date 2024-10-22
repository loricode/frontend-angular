import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule,  HeaderOptionComponent, SearchComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orderDescription = 'order 1';
  isCreate = false;
  isOpen = false;
  isOrderOpen = false;

  private fb = inject(FormBuilder);

  form = this.fb.group({
    'titleField':[''],
    'descriptionField':[''],
    'nameField': [''],
    'identificationField':['']
  }); 

  listTechnicians = [
    { 
     id:'1',
     identification:'42355436',
     fullName:'Angel Campillo',
     phone:'3053228640',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'2',
     identification:'423554368979',
     fullName:'Freddy Cuadrado',
     phone:'3053228640',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'3',
     identification:'42355436568',
     fullName:'Esteban Doria',
     phone:'3053228640',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'4',
     identification:'42355436568',
     fullName:'Felipe Cantillo',
     phone:'3053228640',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'5',
     identification:'42355436568',
     fullName:'Itala Ayala',
     phone:'3053228640',
     email:'itala07@gmail.com' 
   },
   { 
     id:'6',
     identification:'42355436568',
     fullName:'Jose Angel Campillo',
     phone:'3053228640',
     email:'ajcampillo07@gmail.com' 
   },
  ];

  listOrders = [
    { 
     id:'1',
     title:'falla nevera 1',
     description:'orden 1',
   },
   { 
     id:'2',
     title:'falla nevera 2',
     description:'orden 2',
   },
  ];

  public openModalNewOrder = () => {
    this.isCreate = true;
    this.isOrderOpen = true;
  }

  public handleModalOrder = () => {
    this.isOrderOpen = !this.isOrderOpen;
    this.isCreate = false;
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


}
