import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//services
import { SystemsTechniciansService } from '../../../../data/systems-technicians/systems-technicians.service';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { Technical } from '../../../../domain/interfaces/orders';
//data
import { TechnicalFilterPipe } from '../../../../data/filters/technical-filter.pipe';


@Component({
  selector: 'app-systems-technicians',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HeaderOptionComponent, SearchComponent, TechnicalFilterPipe],
  templateUrl: './systems-technicians.component.html',
  styleUrl: './systems-technicians.component.css',
})
export class SystemsTechniciansComponent {
  isOpen = false;
  isOpenModalDelete = false;
  description = '';
  isUpdating = false;
  idProcess = 0;
  filterText = '';

  private stService = inject(SystemsTechniciansService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nameField: ['', [Validators.required, Validators.minLength(3)]],
    nitField: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    addressField: ['', [Validators.required, Validators.maxLength(100)]],
    emailField: ['', [Validators.required, Validators.email]],
    phoneField: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  });

  listTechnicians: Technical[] = [];

  ngOnInit(): void {
    this.getListAll();
  }

  private getListAll = () => {
    this.stService.getListTechnical().subscribe({
      next: (value) => {
        this.listTechnicians = value;
      },
    });
  };

  public createOrUpdate = () => {

    if(this.form.invalid) return;
    
    const { addressField, emailField, nameField, phoneField, nitField } =
      this.form.value;

    const objReq = {
      documento: nitField,
      fullname: nameField,
      direccion: addressField,
      email: emailField,
      telefono: phoneField,
      activo: true,
    };

    const objUpdate = {
      ...objReq,
      id: this.idProcess,
    };

    if (this.isUpdating) {
      //si esta actualizando hago esto
      this.stService.updateTechnical(this.idProcess, objUpdate).subscribe({
        next: () => {
          this.getListAll();
        },
        error: (err) => {},
      });
      this.form.reset();
      this.isUpdating = false;
    } else {
      //si esta creado hago esto
      this.stService.createTechnical(objReq).subscribe({
        next: () => {
          this.getListAll();
        },
        error: (err) => {},
      });
    }

    this.handleModal();
  };

  public openModalNewTechnician = () => {
    this.handleModal();
  };

  public edit = (id: number) => {
    this.idProcess = id;

    this.isUpdating = true;

    this.stService.getTechnical(id).subscribe({
      next: (value) => {
       
        this.form.setValue({
          nameField: value.fullname,
          addressField: value.direccion,
          nitField: value.documento,
          emailField: value.email,
          phoneField: value.telefono
        });
      }
    });

    this.handleModal();
  };

  public setDeleteRecocord = (item: any) => {
    this.idProcess = item.id;
    this.description = item.fullname;
    this.isOpenModalDelete = true;
  };

  public deleteRecord = () => {
    this.stService.deleteTechnical(this.idProcess).subscribe({
      next: () => {
        this.getListAll();
      },
    });

    this.isOpenModalDelete = false;
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

  //filtro del array
  public search = (text:any) => {
    this.filterText = text
  } 

  public filteredCustomers(): Technical[] {
    return new TechnicalFilterPipe().transform(this.listTechnicians, this.filterText);
  }

}
