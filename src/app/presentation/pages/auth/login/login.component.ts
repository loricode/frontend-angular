import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router = inject(Router)

  login = () => {

    this.router.navigate(["dashboard"])

  }

}
