import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { IDropdownSettings } from './components/multi-select-dropdown/model/multi-select.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleComponent } from './demo/single/single.component';
import { MultiComponent } from './demo/multi/multi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SingleComponent, MultiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}