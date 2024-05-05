import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilterPipe } from './list-filter.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [ListFilterPipe, ClickOutsideDirective],
  imports: [
    CommonModule
  ],
  exports:[ListFilterPipe, ClickOutsideDirective]
})
export class CoreModule { }
