function convertCurrency (funds = 1000, fundsCurrency = 'RUB', targetCurrency = 'USD') {
    let currencyRate;
    fundsCurrencyUpperCase = fundsCurrency.toUpperCase();
    targetCurrencyUpperCase = targetCurrency.toUpperCase();
    if (fundsCurrencyUpperCase === 'RUB' && targetCurrencyUpperCase === 'USD') {
        currencyRate = 0.00831;
        return funds * currencyRate;
    } else {
        return null;
    }
}

alert(convertCurrency());
alert(convertCurrency(2000, 'EUR', 'USD'));