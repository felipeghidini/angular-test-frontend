import { Component } from '@angular/core';

@Component({
  selector: 'app-select-link',
  templateUrl: './select-link.component.html',
  styleUrl: './select-link.component.css'
})
export class SelectLinkComponent {
  selectedItem: string = '';
  isButtonDisabled: boolean = false;


  toggleButton(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
