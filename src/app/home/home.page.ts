import { Component } from '@angular/core';

interface DropdownOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dropdownOptions: DropdownOption[] = [
    { label: 'Custom Dropdown test', value: 1 },
    { label: 'Second Dropdown option', value: 2 },
    { label: 'Third Dropdown option', value: 3 },
    { label: 'Another one', value: 4 },
    { label: 'But not less important', value: 5 },
    { label: 'The latest option in the dropdown', value: 6 },
  ];

  selectedOption!: DropdownOption;

  constructor() {
    this.selectedOption = this.dropdownOptions[0];
  }

  selectOption(event: any) {
    this.selectedOption = event;
    console.log(this.selectedOption);
  }
}
