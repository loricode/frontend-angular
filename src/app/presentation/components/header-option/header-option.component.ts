import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-option',
  standalone: true,
  imports: [],
  templateUrl: './header-option.component.html',
  styleUrl: './header-option.component.css',
})
export class HeaderOptionComponent {
  private router = inject(Router);

  goBack = () => {
    this.router.navigate(['dashboard']);
  };
}
