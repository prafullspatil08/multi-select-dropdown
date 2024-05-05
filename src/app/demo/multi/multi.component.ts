import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IDropdownSettings } from '../../components/multi-select-dropdown/model/multi-select.model';
import { MultiSelectDropdownComponent } from '../../components/multi-select-dropdown/multi-select-dropdown.component';

@Component({
  selector: 'app-multi',
  standalone: true,
  imports: [ReactiveFormsModule, MultiSelectDropdownComponent],
  templateUrl: './multi.component.html',
  styleUrl: './multi.component.scss'
})
export class MultiComponent {
    myForm: FormGroup;
    disabled = false;
    ShowFilter = true;
    showAll = true;
    limitSelection = false;
    limitShow = false;
    disableBangalore = true;
    optionList: Array<any> = [];
    selectedItems: Array<any> = [];
    dropdownSettings: IDropdownSettings =  {
      singleSelection: false,
      defaultOpen: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: this.showAll,
      itemsShowLimit: 999999,
      allowSearchFilter: this.ShowFilter
    };;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit() {
      this.optionList = [
        { item_id: 1, item_text: 'New Delhi' },
        { item_id: 2, item_text: 'Mumbai' },
        { item_id: 3, item_text: 'Bangalore', isDisabled: this.disableBangalore },
        { item_id: 4, item_text: 'Pune' },
        { item_id: 5, item_text: 'Chennai' },
        { item_id: 6, item_text: 'Navsari' }
      ];
      this.selectedItems = [
        { item_id: 4, item_text: 'Pune' },
        { item_id: 1, item_text: 'New Delhi' }
      ];
      this.myForm = this.fb.group({
        city: [this.selectedItems]
      });
    }
  
    onItemSelect(item: any) {
      console.log('onItemSelect', item);
      console.log('form model', this.myForm.get('city').value);
    }
    onItemDeSelect(item: any) {
      console.log('onItem DeSelect', item);
      console.log('form model', this.myForm.get('city').value);
    }
  
    onSelectAll(items: any) {
      console.log('onSelectAll', items);
    }
  
    onDropDownClose() {
      console.log('dropdown closed');
    }
  
  }
