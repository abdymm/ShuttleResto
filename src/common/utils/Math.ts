export const roundedOneDecimal = (number: number) => number.toFixed(1);
export const mToKm = (meter: number) => meter / 1000;
export const toMoneyFormat = (
  number: number,
  locale: string = 'ko-KR',
  currency: string = 'KRW',
) => number.toLocaleString(locale, {style: 'currency', currency: currency});
