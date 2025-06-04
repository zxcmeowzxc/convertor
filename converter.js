const RATES = {
    usd: 0.012545,
    eur: 0.011047,
  };
  
  // конвертер рубли в валюту
  
  export function convert({ rub, currency }) {
    if (!RATES[currency]) {
      return null;
    }
  
    return rub * RATES[currency];
  }