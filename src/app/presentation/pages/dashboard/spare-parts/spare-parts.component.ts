import { Component, inject } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderOptionComponent } from '../../../components/header-option/header-option.component';
import { ToastrService } from 'ngx-toastr';
import { SparePartService } from '../../../../data/spare-part/spare-part.service';

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  imports: [HeaderOptionComponent, ReactiveFormsModule, CurrencyPipe, NgIf],
  templateUrl: './spare-parts.component.html',
  styleUrl: './spare-parts.component.css'
})
export class SparePartsComponent {
  private toastr = inject(ToastrService);
  private fb = inject(FormBuilder);
  private sparePartService = inject(SparePartService);
  arrayData: any[] = [{code:'1002813', price:35000, quantity:4, reference:'jjjj', dsc:'gas refrigerante R134A'}];

  form = this.fb.group({
    sparePartField: ['', [Validators.required, Validators.maxLength(250)]],
    quantityField: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    priceField: ['', [Validators.required]],
    observationField: [''],
  });


  public getData = () => {
    this.sparePartService.getListSpareParts().subscribe({
      next: (value) => {
          this.arrayData = value;
      },
    })
  }

  public searchSparePart = () => {

    const query = this.form.value.sparePartField!;

    this.sparePartService.searchSpareParts(query).subscribe({
      next: (value)  => {
          console.log(value)
      },
    })

  }

  public saveSparePart = () => {

    const { priceField, quantityField, sparePartField } = this.form.value

    const objReq = {
      quantity: quantityField,
      price: priceField,
      sparePart: sparePartField
    }

    this.sparePartService.createSparePart(objReq).subscribe({
      next: (value) => {
        this.toastr.success('Creado con exito', 'Repuesto');
      },
    })

  }

  public deleteSparePart = (item:any) => {
     this.sparePartService.deleteSparePart(item.id).subscribe({
      next: (value) => {
        this.toastr.success('Eliminado con exito', 'Repuesto');
      },
     })
  }

}
