/**
 * @author Boris Trochez
 * @description: interface created using https://app.quicktype.io/ according to the 
 * response given by the exchangeRates public API.
 */

export interface CurrencyConversion {
    success:    boolean;
    timestamp:  number;
    historical: boolean;
    base:       string;
    date:       Date;
    rates:      Rates;
}

export interface Rates {
    USD: number;
}
