import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() items: { value: string, label: string }[] = [];
  @Input() disabled: boolean = false;
  @Input() selectedItem: string = '';
  @Output() selectedItemChange: EventEmitter<string> = new EventEmitter<string>();

  onChange(event: any): void {
    const selectedValue = event.target.value;
    this.selectedItem = selectedValue;
    this.selectedItemChange.emit(selectedValue);
  }

}
