import toRegexRange = require('to-regex-range');
import { rangedRecord } from '../interfaces/rangedRecord';

export function validateCardNumberPrefix(cardNumber: string, prefixes: Array<number>, rangedPrefixes: Array<rangedRecord>): boolean {
  let parsedPrefixes = '';

  if (prefixes.length > 0) {
    parsedPrefixes = prefixes.reduce((accumulator: string, prefix: number, index: number) => {
      let result = accumulator + prefix.toString();

      if (index + 1 !== prefixes.length) {
        result = result + '|';
      }

      return result;
    }, parsedPrefixes);
  }

  if (rangedPrefixes.length > 0) {
    parsedPrefixes = rangedPrefixes.reduce((accumulator: string, rangedPrefix: rangedRecord, index: number) => {
      let result = accumulator;

      if (prefixes.length > 0 && index === 0) {
        result = result + '|';
      }
      
      result = result + toRegexRange(rangedPrefix.minimum, rangedPrefix.maximum);

      if (index + 1 !== rangedPrefixes.length) {
        result = result + '|';
      }

      return result;
    }, parsedPrefixes);
  }

  const regularExpression = new RegExp("^" + '(' + parsedPrefixes + ')' + "");
  return regularExpression.exec(cardNumber) !== null;
}
