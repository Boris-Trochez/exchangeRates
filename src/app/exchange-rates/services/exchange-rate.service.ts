import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKeyER, exchangeRatesUrl } from 'src/app/shared/utils/links-apis';
import { LatestCurrency } from '../interfaces/latest-currency.interface';
import { CurrencyConversion } from '../interfaces/currency-conversion.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(
    private http: HttpClient
  ) { }

/**
 * @author Boris Trochez
 * @description: This method fetch the public API exchangeRates obtaining an object with the latest available currencies 
 * @returns: An object with the latest available currencies
 */
  getLatestCurrencies() {
    //return this.http.get( 'http://api.exchangeratesapi.io/v1/symbols?access_key=6e61f76cf79d9b55a6135df696bd3bdf' ); 
    //return this.http.get( 'http://api.exchangeratesapi.io/v1/latest?access_key=2790551a86bb80714ac74a207d444e86' ); 
    return this.http.get<LatestCurrency>( `${ exchangeRatesUrl }/latest?access_key=${ apiKeyER }` ); 
  }

  /**
 * @author Boris Trochez
 * @param1 money, is the currency chosen to make the conversion using EUR as the base on exchange
 * @param2 date, is a date chosen to obtain the value of the money in that time
 * @description: This method fetch the public API exchangeRates obtaining the value of a currency after a  base and a date given. 
 * @returns: An object with the value of a currency given
 */
  doCurrencyConversion( money: string, date: string ) {
    //return this.http.get(`http://api.exchangeratesapi.io/v1/${ date }?access_key=2790551a86bb80714ac74a207d444e86&base=EUR&symbols=${ money }`);
    return this.http.get<CurrencyConversion>(`${ exchangeRatesUrl }/${ date }?access_key=${ apiKeyER }&base=EUR&symbols=${ money }`);
  }
}
