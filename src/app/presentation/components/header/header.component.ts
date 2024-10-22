import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  headerIconApp = '../../../../assets/imagen.jpeg'

   headerStyle = {
    "background-image": `url({../../../../assets/banner.svg)`,
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "object-fit": "cover",
    "max-height": "160px",
    "height": "160px",
    position: "relative",
    width: "100%",
    "min-width": "100%",
 }
 

}
