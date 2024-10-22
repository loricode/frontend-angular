import { Component, inject } from '@angular/core';

//components
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { SearchComponent } from '../../../components/search/search.component';

//utils
import { stringAvatar, stringToColor } from '../../../utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderOptionComponent, SearchComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

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
     title:'42355436',
     fullName:'Angel Campillo',
     status:'A',
     description:'ajcampillo07@gmail.com' 
   },
   { 
     id:'2',
     title:'423554368979',
     status:'B',
     description:'descripcion falla'  //tiene que ver con a orden
   },
   { 
     id:'3',
     title:'42355436568',
     status:'C',
     description:'descripcion falla 2'
   },
   { 
     id:'4',
     title:'42355436568',
     status:'D',
     description:'descripcion falla 3'
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
