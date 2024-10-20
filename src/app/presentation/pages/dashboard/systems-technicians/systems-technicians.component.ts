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
}
