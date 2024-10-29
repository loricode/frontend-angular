import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() eventOnchane: EventEmitter<string> = new EventEmitter();

  public onChange = (event:any) => {
   this.eventOnchane.emit(event.target.value);
  }

  clearInput = () => {
    const search = document.getElementById("search") as HTMLInputElement
    search!.value = '';
    this.eventOnchane.emit('');
   }

}
