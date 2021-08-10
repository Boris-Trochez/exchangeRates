/**
 * @author Boris Trochez
 * @description: interface created using https://app.quicktype.io/ according to the 
 * response given by the exchangeRates public API.
 */

export interface LatestCurrency {
    success:   boolean;
    timestamp: number;
    base:      string;
    date:      Date;
    rates:     { [key: string]: number };
}
