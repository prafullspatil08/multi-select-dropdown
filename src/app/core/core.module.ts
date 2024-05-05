import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MultiSelectFilterPipe } from './pipe/multi-select-filter.pipe';



@NgModule({
  declarations: [MultiSelectFilterPipe, ClickOutsideDirective],
  imports: [
    CommonModule
  ],
  exports:[MultiSelectFilterPipe, ClickOutsideDirective]
})
export class CoreModule { }
