import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOrdersComponent } from '../../../components/modals/modal-orders/modal-orders.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalOrdersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router = inject(Router);

  isOpen = false

  public listModules = [
    {
      title:'Usuarios',
      path:'',
      isOption:true
    },
    {
      title:'Clientes',
      path:'',
      isOption:true
    },
    {
      title:'Ordenes',
      path:'',
      isOption:false
    },]

  public goModule = (path:string, isOption:boolean) => {

    if(!isOption){
      this.isOpen = true
      return;
    }

    this.router.navigate([`dashboard/${path}`]);

  }

  public closeModal = () => {
    this.isOpen = false;
  }

}
