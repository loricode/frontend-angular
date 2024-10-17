import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//service
import { GlobalStateService } from '../../state/global/global-state.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  
  private router = inject(Router);
  public globalState = inject(GlobalStateService);


  public getStateOrders = () => {
    return this.globalState.listOrders;
  }
  
  public goBack = () => {

    this.router.navigate(['dashboard'])
    
  }

}
