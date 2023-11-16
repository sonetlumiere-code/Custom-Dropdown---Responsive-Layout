import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownOption } from 'src/app/types/types';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() dropdownOptions!: DropdownOption[];
  @Input() selectedOption!: DropdownOption;
  @Output() handleSelectOption: EventEmitter<DropdownOption> = new EventEmitter();

  isDropdownOpen = false;
  isDropdownFocused = false;

  constructor() { }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isDropdownFocused = !this.isDropdownFocused;
  }

  selectOption(option: DropdownOption) {
    this.isDropdownOpen = false;
    this.isDropdownFocused = false;
    this.handleSelectOption.emit(option);
  }

}
