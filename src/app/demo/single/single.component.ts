import { Component } from '@angular/core';
import { MultiSelectDropdownComponent } from '../../components/multi-select-dropdown/multi-select-dropdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [FormsModule, MultiSelectDropdownComponent],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent {
  optionList: Array<string> = [
    'Mumbai',
    'New Delhi',
    'Bangaluru',
    'Pune',
    'Navsari',
  ];
  selectedItem: Array<string> = ['Mumbai'];
  closeDropdownSelection = false;
  dropdownSettings: any = {
    singleSelection: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    closeDropDownOnSelection: this.closeDropdownSelection,
  };
  disabled = false;

  ngOnInit() {}

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log('selectedItem', this.selectedItem);
  }

  toggleCloseDropdownSelection() {
    this.closeDropdownSelection = !this.closeDropdownSelection;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      closeDropDownOnSelection: this.closeDropdownSelection,
    });
  }

  handleReset() {
    this.selectedItem = [];
  }
}
