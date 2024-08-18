import { validate } from './validator';

export type validateCardNumberCommand = Readonly<{
  cardNumber: string;
}>;

export function makeValidateCardNumberCommand() {
  return async function validateCardNumberCommand(command: validateCardNumberCommand) {
    await validate(command);

    

    return {
      cardNetwork: 'Nganu',
      isValid: true
    };
  };
}
