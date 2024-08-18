import { makeValidateCardNumberCommand } from './commands/validate-card-number';

export function makePaymentsUseCases(dependencies: Dependencies) {
  return {
    commands: {
      validateCardNumber: makeValidateCardNumberCommand(dependencies),
    }
  };
}
