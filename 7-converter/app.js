function convertCurrency(funds, fundsCurrency, targetCurrency) {
    let currencyRate;
    fundsCurrencyUpperCase = fundsCurrency.toUpperCase();
    targetCurrencyUpperCase = targetCurrency.toUpperCase();
    switch (true) {
        case fundsCurrencyUpperCase === 'RUB' && targetCurrencyUpperCase === 'USD':
            currencyRate = 0.00831;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'USD' && targetCurrencyUpperCase === 'RUB':
            currencyRate = 96;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'RUB' && targetCurrencyUpperCase === 'EUR':
            currencyRate = 0.00842;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'EUR' && targetCurrencyUpperCase === 'RUB':
            currencyRate = 89.82;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'RUB' && targetCurrencyUpperCase === 'GBP':
            currencyRate =  0.0101;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'GBP' && targetCurrencyUpperCase === 'RUB':
            currencyRate = 103.15;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'EUR' && targetCurrencyUpperCase === 'USD':
            currencyRate = 1.032;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'USD' && targetCurrencyUpperCase === 'EUR':
            currencyRate = 0.9054;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'GBP' && targetCurrencyUpperCase === 'USD':
            currencyRate = 1.149;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'USD' && targetCurrencyUpperCase === 'GBP':
            currencyRate = 0.8703;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'GBP' && targetCurrencyUpperCase === 'EUR':
            currencyRate = 1.149;
            return funds * currencyRate;
        case fundsCurrencyUpperCase === 'EUR' && targetCurrencyUpperCase === 'GBP':
            currencyRate = 1.199;
            return funds * currencyRate;
        default:
            return 'С этими валютами мы не работаем';                   
    }
}    

console.log(convertCurrency(1000, 'RUB', 'USD'));
console.log(convertCurrency(1000, 'USD', 'RUB'));
console.log(convertCurrency(1000, 'RUB', 'EUR'));
console.log(convertCurrency(1000, 'EUR', 'RUB'));
console.log(convertCurrency(1000, 'RUB', 'GBP'));
console.log(convertCurrency(1000, 'GBP', 'RUB'));
console.log(convertCurrency(1000, 'EUR', 'USD'));
console.log(convertCurrency(1000, 'USD', 'EUR'));
console.log(convertCurrency(1000, 'GBP', 'USD'));
console.log(convertCurrency(1000, 'USD', 'GBP'));
console.log(convertCurrency(1000, 'GBP', 'EUR'));
console.log(convertCurrency(1000, 'EUR', 'GBP'));
console.log(convertCurrency(1000, 'AUD', 'CAD'));
