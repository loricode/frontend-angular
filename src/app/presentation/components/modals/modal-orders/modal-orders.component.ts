import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

//service
import { GlobalStateService } from '../../../state/global/global-state.service';

@Component({
  selector: 'app-modal-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-orders.component.html',
  styleUrl: './modal-orders.component.css'
})
export class ModalOrdersComponent {
  
  private fb = inject(FormBuilder);
  private globalState = inject(GlobalStateService);
  private router = inject(Router);

  form = this.fb.group({
    'nameField': [''],
    'nitField':[''],
    'addressField':[''],
    'emailField':[''],
    'failureField':['']
  }) 

  public onSubmit = () => {
    
    const { nameField, addressField, failureField, nitField, emailField } = this.form.value;
    if(!addressField || !emailField || !nameField  || !nitField|| !failureField){
      return;
    }

    const objOrder = {
      id: self.crypto.randomUUID(),
      address: addressField,
      email:emailField,
      name: nameField,
      nit: nitField, 
      failure: failureField,
    }

    this.globalState.setListOrders(objOrder);
   
    this.router.navigate(['orders']);

  }

}
