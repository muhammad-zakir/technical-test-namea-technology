import { cardNetworks } from './constants/cardNetworks'
import { validateCardNetwork } from './helpers/validateCardNetwork';
import { cardNetwork } from './interfaces/cardNetwork';
import { cardNetworkValidationResponse } from './interfaces/cardNetworkValidationResponse';
import { validate } from './validator';

export type validateCardNumberCommand = Readonly<{
  cardNumber: string;
}>;

export function makeValidateCardNumberCommand() {
  return async function validateCardNumberCommand(command: validateCardNumberCommand) {
    const defaultResponse: cardNetworkValidationResponse = {
      cardNetwork: 'Unknown',
      isValid: false,
    };

    try {
      await validate(command);
    } catch (error) {
      return defaultResponse;
    }

    return cardNetworks.reduce(
      (accumulator: cardNetworkValidationResponse, cardNetwork: cardNetwork) => {
        const isValidated = validateCardNetwork(cardNetwork, command.cardNumber);
        if (isValidated) {
          return {
            cardNetwork: cardNetwork.name,
            isValid: true
          }
        }

        return {
          cardNetwork: accumulator.cardNetwork,
          isValid: accumulator.isValid,
        };
      },
      defaultResponse as cardNetworkValidationResponse,
    );
  };
}
