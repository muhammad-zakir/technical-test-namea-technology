import { validateCardNumberLength } from '../helpers/validateCardNumberLength';
import { cardNetwork } from '../interfaces/cardNetwork';
import {
  validateCardNumberPrefix
} from '@application/payments/commands/validate-card-number/helpers/validateCardNumberPrefix';

export function validateCardNetwork(cardNetwork: cardNetwork, cardNumber: string): boolean {
  const isCardNumberLengthValid = validateCardNumberLength(cardNumber, cardNetwork.length.maximum, cardNetwork.length.minimum)
  const isCardNumberPrefixValid = validateCardNumberPrefix(cardNumber, cardNetwork.prefixes, cardNetwork.rangedPrefixes);

  return isCardNumberLengthValid && isCardNumberPrefixValid;
}
