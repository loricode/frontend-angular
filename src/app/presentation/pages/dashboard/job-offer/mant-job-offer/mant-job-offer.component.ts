import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { JobOfferService } from '../../../../../data/job-offer/job-offer.service';


@Component({
  selector: 'app-mant-job-offer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mant-job-offer.component.html',
  styleUrl: './mant-job-offer.component.css'
})
export class MantJobOfferComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder);

  private jobOfferService = inject(JobOfferService)

  form = this.fb.group({
    'title': [''],
    'description':[''],
    'date':[null]
  }) 

  public onSubmit = () => {

    console.log(this.form.value)
    
    this.jobOfferService.createJobOffer(this.form.value).subscribe({
      next:(value) => {
        
      },
      error: (err) => {

      }
    })

  }

  
  public goBack = () => {

    this.router.navigate(['dashboard/jobOffer'])
    
  }

}
