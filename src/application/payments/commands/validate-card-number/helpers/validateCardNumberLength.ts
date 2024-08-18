export function validateCardNumberLength(cardNumber: string, maximumLength: number, minimumLength: number): boolean {
  return cardNumber.length >= minimumLength && cardNumber.length <= maximumLength;
}
