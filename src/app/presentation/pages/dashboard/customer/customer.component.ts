import { Component, inject } from '@angular/core';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

//services
import { CustomerService } from '../../../../data/customer/customer.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderOptionComponent, SearchComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  isOpen = false;
  isOpenModalDelete = false;
  description = "";
  isUpdating = false;
  private fb = inject(FormBuilder);
  private customerService = inject(CustomerService);

  form = this.fb.group({
    nameField: [''],
    nitField: [''],
    addressField: [''],
    emailField: [''],
    phoneField: [''],
  });

  listCustomers = [
    {
      id: '1',
      identification: '42355436',
      fullName: 'Angel Campillo',
      address: '',
      phone: '3053228640',
      email: 'ajcampillo07@gmail.com',
    },
    {
      id: '2',
      identification: '423554368979',
      fullName: 'Freddy Cuadrado',
      address: 'Ciudad bonita',
      phone: '3053228640',
      email: 'ajcampillo07@gmail.com',
    },
    {
      id: '3',
      identification: '42355436568',
      fullName: 'Esteban Doria',
      address: 'valle dee cauca',
      phone: '3053228640',
      email: 'ajcampillo07@gmail.com',
    },
    {
      id: '4',
      identification: '42355436568',
      fullName: 'Felipe Cantillo',
      address: 'cali',
      phone: '3053228640',
      email: 'ajcampillo07@gmail.com',
    },
    {
      id: '5',
      identification: '42355436568',
      fullName: 'Itala Ayala',
      phone: '3053228640',
      email: 'itala07@gmail.com',
    },
    {
      id: '6',
      identification: '42355436568',
      fullName: 'Jose Angel Campillo',
      phone: '3053228640',
      email: 'ajcampillo07@gmail.com',
    },
  ];


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //descomenta para llamar el listado de clientes
   // this.getListAll()
  }


  getListAll = () => {
    //verficar si es post o get 
    //al get no se le pasa objetos a la petición {}
    this.customerService.getListCustomer({}).subscribe({
      next: (value) => {
        //aqui para lenar ls datos de los clientes
        //this.listCustomers = value
      }
    })
  }

  public openModalNewCustomer = () => {
    this.handleModal();
  };

  public edit = (item: any) => {

    this.isUpdating = true;

    this.form.setValue({
      nameField: item.fullName,
      addressField: item.address,
      nitField: item.identification,
      emailField: item.email,
      phoneField: item.phone,
    });

    this.handleModal();
  };

  public setDeleteRecocord = (item:any) => {

    this.description  = item.fullName;
    this.isOpenModalDelete = true;
    
  }

  public deleteRecord = () => {

   this.isOpenModalDelete = false;

  }

  public handleModal = () => {
    this.isOpen = !this.isOpen;
  };

  public createOrUpdate = () => {

    if(this.isUpdating){

      //si esta actualizando hago esto
      this.customerService.updateCustomer({}).subscribe({
        next : (value) => {
            
        },
        error: (err) => {
            
        },
      });

      this.isUpdating = false;

    }else{

      //si esta creado hago esto
      this.customerService.createCustomer({}).subscribe({
        next : (value) => {
            
        },
        error: (err) => {
            
        },
      });

    }

  }

  public getStringAvatar = (text: string) => {
    return stringAvatar(text);
  };

  public getColorAvatar = (text: string) => {
    return { 'background-color': stringToColor(text) };
  };
}
