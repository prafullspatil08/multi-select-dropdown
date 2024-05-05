import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { IDropdownSettings } from './components/multi-select-dropdown/model/multi-select.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule,MultiSelectDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
    myForm!: FormGroup;
    disabled = false;
    ShowFilter = true;
    showAll = true;
    limitSelection = false;
    limitShow = false;
    disableBangalore = true;
    cities: Array<any> | any = [];
    selectedCities: Array<any> = [];
    dropdownSettings: IDropdownSettings = {}; 
    
    states = ['MH', 'GA','GJ'];
    selectedState :Array<string> = ['MH'];
    closeDropdownSelection = false;
    anotherDropdownSettings : IDropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.cities = [
        { item_id: 1, item_text: 'New Delhi' },
        { item_id: 2, item_text: 'Mumbai' },
        { item_id: 3, item_text: 'Bangalore', isDisabled: this.disableBangalore },
        { item_id: 4, item_text: 'Pune' },
        { item_id: 5, item_text: 'Chennai' },
        { item_id: 6, item_text: 'Navsari' }
      ];
      this.selectedCities = [
        { item_id: 4, item_text: 'Pune' },
        { item_id: 6, item_text: 'Navsari' }
      ];
      this.dropdownSettings = {
        singleSelection: false,
        defaultOpen: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableCheckAll: this.showAll,
        itemsShowLimit: 999999,
        allowSearchFilter: this.ShowFilter
      };
      this.myForm = this.fb.group({
        city: [this.selectedCities]
      });
    }
  
    onItemSelect(item: any) {
      console.log('onItemSelect', item);
      console.log('form model', this.myForm?.controls['city'].value);
    }
    onItemDeSelect(item: any) {
      console.log('onItem DeSelect', item);
      console.log('form model', this.myForm?.controls['city'].value);
    }
    onSelectAll(items: any) {
      console.log('onSelectAll', items);
    }
    onDropDownClose() {
      console.log('dropdown closed');
    }
    toogleShowAll() {
      this.showAll = !this.showAll;
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        enableCheckAll: this.showAll
      });
    }
    toogleShowFilter() {
      this.ShowFilter = !this.ShowFilter;
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        allowSearchFilter: this.ShowFilter
      });
    } 
    handleLimitSelection() {
      if (this.limitSelection) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
          limitSelection: 2
        });
      } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
          limitSelection: -1
        });
      }
    } 
    handleLimitShow() {
      if (this.limitShow) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
          itemsShowLimit: 3
        });
      } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
          itemsShowLimit: 999999
        });
      }
      console.log()
    }
    handleDisableBangalore() {
      this.cities[2].isDisabled = this.disableBangalore;
      this.cities = [...this.cities];
    }
    handleReset() {
      this.myForm.controls['city'].setValue([]);
    }

  }


// export class AppComponent {

//   cities: Array<string> = [];
//   selectedItem: Array<string> = [];
//   dropdownSettings: any = {};
//   closeDropdownSelection = false;
//   disabled = false;

//   ngOnInit() {
//     this.cities = ['Mumbai', 'New Delhi', 'Bangaluru', 'Pune', 'Navsari'];

//     this.dropdownSettings = {
//       singleSelection: true,
//       selectAllText: 'Select All',
//       unSelectAllText: 'UnSelect All',
//       allowSearchFilter: true,
//       closeDropDownOnSelection: this.closeDropdownSelection
//     };
//     this.selectedItem = ['Mumbai'];
//   }

  // onItemSelect(item: any) {
  //   console.log('onItemSelect', item);
  //   console.log('selectedItem', this.selectedItem);
  // }

  // toggleCloseDropdownSelection() {
  //   this.closeDropdownSelection = !this.closeDropdownSelection;
  //   this.dropdownSettings = Object.assign({}, this.dropdownSettings, { closeDropDownOnSelection: this.closeDropdownSelection });
  // }

  // handleReset() {
  //   this.selectedItem = [];
  // }
// }