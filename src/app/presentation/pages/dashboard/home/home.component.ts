import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//components
import { ModalOrdersComponent } from '../../../components/modals/modal-orders/modal-orders.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalOrdersComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router = inject(Router);
  setting ='../../../../assets/setting.svg';
  isOpen = false;

  public listModules = [
    {
      title:'Servicios',
      path:'servicios',
      img:'../../../../assets/service_toolbox.svg'
    },
    {
      title:'Clientes',
      path:'clientes',
      img:'../../../../assets/person.svg'
    },
    {
      title:'Técnicos de servicios',
      path:'tecnicos',
      img:'../../../../assets/body_system.svg'
    },
    {
      title:'Ordenes',
      path:'ordenes',
      img:'../../../../assets/orders.svg'
    }];

  public goModule = (path:string) => {

    this.router.navigate([`dashboard/${path}`]);

  }

  public closeModal = () => {
    this.isOpen = false;
  }

}
