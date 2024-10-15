import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantJobOfferComponent } from './mant-job-offer.component';

describe('MantJobOfferComponent', () => {
  let component: MantJobOfferComponent;
  let fixture: ComponentFixture<MantJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantJobOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
