import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';

//services
import { CustomerService } from '../../../../data/customer/customer.service';
import { Customer } from '../../../../domain/interfaces/orders';

import { CustomerFilterPipe } from '../../../../data/filters/customer-filter.pipe';


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HeaderOptionComponent, SearchComponent, CustomerFilterPipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  isOpen = false;
  isOpenModalDelete = false;
  idProcess = 0;
  description = "";
  filterText = '';
  isUpdating = false;
  private fb = inject(FormBuilder);
  private customerService = inject(CustomerService);

  form = this.fb.group({
    nameField: ['', [Validators.required, Validators.minLength(3)]],
    nitField: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    addressField: ['', [Validators.required, Validators.maxLength(100)]],
    emailField: ['', [Validators.required, Validators.email]],
    phoneField: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });

  listCustomers:Array<Customer> = [];


  ngOnInit(): void {
     this.getListAll();
  }


  private getListAll = () => {
    this.customerService.getListCustomers().subscribe({
      next: (value) => {
        this.listCustomers = value
      }
    })
  }

  public openModalNewCustomer = () => {
    this.handleModal();
  };

  public edit = (id:number) => {

    this.isUpdating = true;
    this.idProcess = id;
    this.customerService.getCustomer(id).subscribe({
      next: (value) => {
       
        this.form.setValue({
          nameField: value.razon_social,
          addressField: value.direccion,
          nitField: value.documento,
          emailField: value.email,
          phoneField: value.telefono,
        });
      }
    })

    this.handleModal();
  };

  public setDeleteRecocord = (item:any) => {

    this.idProcess = item.id;
    this.description  = item.fullName;
    this.isOpenModalDelete = true;
    
  }

  public deleteRecord = () => {

    this.customerService.deleteCustomer(this.idProcess).subscribe({
      next: () => {

        this.getListAll();
      }
    })

   this.isOpenModalDelete = false;

  }

  public handleModal = () => {
    this.isOpen = !this.isOpen;
  };

  public createOrUpdate = () => {

    if(this.form.invalid) return;
    
    const { addressField, emailField, nameField, phoneField, nitField } = this.form.value;

    const objReq = {
      documento: nitField,
      razon_social: nameField,
      direccion: addressField,
      email: emailField,
      telefono: phoneField,
      activo: true
    };

    const objUpdate = {
      ...objReq, id:this.idProcess
    }

    if(this.isUpdating){
      //si esta actualizando hago esto
      this.customerService.updateCustomer(this.idProcess, objUpdate).subscribe({
        next : (value) => {
            this.getListAll();
        },
        error: (err) => {
            
        },
      });

      this.isUpdating = false;

    }else{

      //si esta creado hago esto
      this.customerService.createCustomer(objReq).subscribe({
        next: () => {
          this.getListAll();
        },
        error: (err) => {
            
        },
      });

    }

    this.handleModal();

  }

  public getStringAvatar = (text: string) => {
    return stringAvatar(text);
  };

  public getColorAvatar = (text: string) => {
    return { 'background-color': stringToColor(text) };
  };

  //filtro del array
  public search = (text:any) => {
    this.filterText = text
  }

  public filteredCustomers(): Customer[] {
    return new CustomerFilterPipe().transform(this.listCustomers, this.filterText);
  }

}
