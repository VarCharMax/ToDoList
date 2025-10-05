import {MatNativeDateModule, MatRippleModule} from '@angular/material/core'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatDatepickerModule,
    MomentDateModule,
    MatNativeDateModule,    
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatRippleModule
  ]
})
export class MaterialModule {}
