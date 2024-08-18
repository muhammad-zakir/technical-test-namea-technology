import { makeValidateCardNumberCommand } from './commands/validate-card-number';

export function makePaymentsUseCases() {
  return {
    commands: {
      validateCardNumber: makeValidateCardNumberCommand(),
    }
  };
}
