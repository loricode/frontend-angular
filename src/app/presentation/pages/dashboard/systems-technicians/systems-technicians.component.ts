import { Component, inject } from '@angular/core';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-systems-technicians',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderOptionComponent, SearchComponent],
  templateUrl: './systems-technicians.component.html',
  styleUrl: './systems-technicians.component.css'
})
export class SystemsTechniciansComponent {
  
  isOpen = false;
  isOpenModalDelete = false;
  description = "";
  isUpdating = false;

  private fb = inject(FormBuilder);
 
  form = this.fb.group({
    'nameField': [''],
    'nitField':[''],
    'addressField':[''],
    'emailField':[''],
    'phoneField':['']
  }) 

  listTechnicians = [
    { 
     id:'1',
     identification:'42355436',
     fullName:'Angel Campillo',
     phone:'3053228640',
     address:'ciudad de la flores',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'2',
     identification:'423554368979',
     fullName:'Freddy Cuadrado',
     phone:'3053228640',
     address:'valle del cauca',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'3',
     identification:'42355436568',
     fullName:'Esteban Doria',
     phone:'3053228640',
     address:'cali',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'4',
     identification:'42355436568',
     fullName:'Felipe Cantillo',
     phone:'3053228640',
     address:'adasd',
     email:'ajcampillo07@gmail.com' 
   },
   { 
     id:'5',
     identification:'42355436568',
     fullName:'Itala Ayala',
     phone:'3053228640',
     address:'adasd',
     email:'itala07@gmail.com' 
   },
   { 
     id:'6',
     identification:'42355436568',
     fullName:'Jose Angel Campillo',
     phone:'3053228640',
     address:'sd',
     email:'ajcampillo07@gmail.com' 
   },
  ];

  public openModalNewTechnician = () => {
    this.handleModal();
  }

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

  public createOrUpdate = () => {

    if(this.isUpdating){

      //si esta actualizando hago esto

      this.isUpdating = false;

    }else{

      //si esta creado hago esto


    }

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
