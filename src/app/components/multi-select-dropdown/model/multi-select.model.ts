export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  disabledField?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  clearSearchFilter?: boolean;
  maxHeight?: number;
  itemsShowLimit?: number;
  limitSelection?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  noFilteredDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
}

export class ListItem {
  id!: String | number;
  text!: String | number;
  isDisabled?: boolean;

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = this.text = source;
      this.isDisabled = false;
    }
    if (typeof source === 'object') {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
    }
  }
}

export const DEFAULT_SETTING = {
  singleSelection: false,
  idField: 'id',
  textField: 'text',
  disabledField: 'isDisabled',
  enableCheckAll: true,
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  allowSearchFilter: false,
  limitSelection: -1,
  clearSearchFilter: true,
  maxHeight: 197,
  itemsShowLimit: 999999999999,
  searchPlaceholderText: 'Search',
  noDataAvailablePlaceholderText: 'No data available',
  noFilteredDataAvailablePlaceholderText: 'No filtered data available',
  closeDropDownOnSelection: false,
  showSelectedItemsAtTop: false,
  defaultOpen: false,
  allowRemoteDataSearch: false,
};
