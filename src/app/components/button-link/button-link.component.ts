import { Component } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css'
})
export class ButtonLinkComponent {
  isButtonDisabled: boolean = false;

  // Método para habilitar ou desabilitar o botão
  toggleButton(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  // Método a ser executado quando o botão do componente filho é clicado
  onButtonClick(): void {
    alert('Botão foi clicado!');
  }
}
