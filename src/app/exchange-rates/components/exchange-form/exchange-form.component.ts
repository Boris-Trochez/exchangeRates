import { ExchangeRateService } from './../../services/exchange-rate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { LatestCurrency } from '../../interfaces/latest-currency.interface';
import { CurrencyConversion } from '../../interfaces/currency-conversion.interface';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {
  public currencies: any[] = [];
  public conversionValue = 0;
  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private exchangeRateService: ExchangeRateService
  ) { }

  ngOnInit(): void {
    this.getLatestCurrencies();
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.fb.group({
      date: [ new Date() ,Validators.required ],
      euros: ['', Validators.pattern(/^[0-9]$/)],
      money: ['', Validators.required ],
      output: this.conversionValue
    });
  }

  getLatestCurrencies() {
    this.exchangeRateService.getLatestCurrencies()
      .subscribe( ({ rates }: LatestCurrency) => {
        console.log("latest currencies ", this.currencies = Object.keys( rates ))
      });
  }

  isInvalid( field: string ) {
        return this.myForm.controls[ field ].invalid 
        && this.myForm.controls[ field  ].touched    
  }

  doCurrencyConversion() {
    let arrayDate: any[] = [];
    let date = DateTime.fromJSDate( this.myForm.value.date );
    let dateFormatApi: string  = '';

    arrayDate = date.toFormat('MM-dd-yyyy').split("-");
    dateFormatApi = `${ arrayDate[2] }-${ arrayDate[0] }-${ arrayDate[1] }`;
    console.log("eeeee", this.myForm.value.money)
    this.exchangeRateService.doCurrencyConversion( this.myForm.value.money,  dateFormatApi )
      .subscribe( ({ rates }: any) => {
        console.log("conversion ", rates );
        
        this.myForm.value.output = ( rates[ this.myForm.value.money ] *  parseInt( this.myForm.value.euros ) ); 
        console.log( "value out", this.conversionValue = this.myForm.value.output )
      })
  } 

}
