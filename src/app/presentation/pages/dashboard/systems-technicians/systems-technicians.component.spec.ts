import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsTechniciansComponent } from './systems-technicians.component';

describe('SystemsTechniciansComponent', () => {
  let component: SystemsTechniciansComponent;
  let fixture: ComponentFixture<SystemsTechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemsTechniciansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemsTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
