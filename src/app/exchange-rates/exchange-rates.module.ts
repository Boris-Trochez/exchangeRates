import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './pages/exchange-rates/exchange-rates.component';
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ExchangeRatesComponent,
    ExchangeFormComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    ExchangeRatesComponent
  ]
})
export class ExchangeRatesModule { }
