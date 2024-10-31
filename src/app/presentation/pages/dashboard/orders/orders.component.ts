import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//servicos
import { CustomerService } from '../../../../data/customer/customer.service';
import { SystemsTechniciansService } from '../../../../data/systems-technicians/systems-technicians.service';
import { OrdersService } from '../../../../data/orders/orders.service';
import { ToastrService } from 'ngx-toastr';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { Order, Technical } from '../../../../domain/interfaces/orders';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, HeaderOptionComponent, SearchComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orderDescription = 'order 1';
  isCreate = false;
  isOpen = false;
  isOrderOpen = false;
  check = false;
  idChecked = 0;
  private customerService = inject(CustomerService);
  private stService = inject(SystemsTechniciansService);
  private ordersService = inject(OrdersService);
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);

  customer = {
    fullName: '',
    identification: '',
    phone: '',
  };

  form = this.fb.group({
    descriptionField: [''],
    specialtyField: [''],
  });

  formSearch = this.fb.group({
    fullNameField: [''],
    identificationField: [''],
  });

  formSearchTechnical = this.fb.group({
    fullNameField: [''],
    identificationField: [''],
  });

  listTechnicians: Technical[] = [];

  listOrders: Order[] = [];

  ngOnInit(): void {
    this.getList();
  }

  private getList = () => {
   
    this.ordersService.getListOrders().subscribe({
      next : (value) => {
       this.listOrders = value;
      }
    });
     
  }

  handleCheck = (item: any) => {
    this.check = !this.check;

    if (!this.check) {
      this.idChecked = 0;
      return;
    }

    this.idChecked = item.id;
  };

  public openModalNewOrder = () => {
    this.isCreate = true;
    this.isOrderOpen = true;
  };

  public searchCustomer = () => {
    const { fullNameField, identificationField } = this.formSearch.value;

    const objReq = {
      identification: identificationField,
      fullName: fullNameField,
    };

    this.customerService.searchCustomer(objReq).subscribe({
      next: (value) => {
        this.customer = {
          fullName: value.razon_social,
          identification: value.documento,
          phone: value.telefono,
        };
      },
    });
  };

  public searchTechnical = () => {
    const { fullNameField, identificationField } =
      this.formSearchTechnical.value;

    const objReq = {
      identification: identificationField,
      fullName: fullNameField,
    };

    this.stService.searchTechnical(objReq).subscribe({
      next: (value) => {
        this.listTechnicians = value;
      },
    });
  };

  public createOrder = () => {

    const { descriptionField, specialtyField } = this.form.value;
    const { identification } = this.customer;

    if(!identification){
      this.toastr.warning('La identificación es requerida', 'Complete la información');
      return;
    }

    if(!descriptionField){
      this.toastr.warning('La descripción es requerida', 'Complete la información' );
      return;
    }

    if(!specialtyField){
      this.toastr.warning('La especialidad es requerida', 'Complete la información');
      return;
    }

    const objReq = {
      nit: identification,
      falla: descriptionField,
      tecnico: this.idChecked,
      especialidad: specialtyField,
    };

    this.ordersService.createOrder(objReq).subscribe({
      next: () => {
        this.toastr.success('Creado con exito', 'Orden');
        this.customer = {
          fullName: '',
          identification: '',
          phone: '',
        };
        this.form.reset();
      },
    });

    this.handleModalOrder();
  };

  public handleModalOrder = () => {
    this.isOrderOpen = !this.isOrderOpen;
    this.isCreate = false;
  };

  public handleModal = () => {
    this.isOpen = !this.isOpen;
  };

  public getStringAvatar = (text: string) => {
    return stringAvatar(text);
  };

  public getColorAvatar = (text: string) => {
    return { 'background-color': stringToColor(text) };
  };
}
