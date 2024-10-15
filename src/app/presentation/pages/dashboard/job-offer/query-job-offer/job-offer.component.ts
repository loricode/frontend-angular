import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { JobOfferService } from '../../../../../data/job-offer/job-offer.service';

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [],
  templateUrl: './job-offer.component.html',
  styleUrl: './job-offer.component.css'
})
export class JobOfferComponent {

  private router = inject(Router);
  private jobOfferservice = inject(JobOfferService);

  listJobOffer:any[] = [];


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getList();

  }


  private getList = () => {
    this.jobOfferservice.getListJobOffer({}).subscribe({
      next:(value) => {
        
        this.listJobOffer = value;

      }
    })
  }


  public goMaintenance = () => {

    this.router.navigate(['dashboard/jobOfferMant'])

  }

}
