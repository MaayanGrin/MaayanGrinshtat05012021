import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

const MODULES = [

  // Navigation.
  MatToolbarModule,

  // Layout
  MatListModule,
  MatCardModule,

  // Buttons & Indicators
  MatButtonModule,
  MatChipsModule,
  MatIconModule,

  // Form Controls.
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatSelectModule,

  // Popups & Modals
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,

];

@NgModule({
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ],
  declarations: [],
  providers: [
    MatDatepickerModule,
    MatIconRegistry,
    MatDialogConfig
  ]
})
export class MaterialModule {
}
