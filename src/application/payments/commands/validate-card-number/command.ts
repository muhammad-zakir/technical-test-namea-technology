import { cardNetworks } from './constants/cardNetworks'
import { validateCardNetwork } from './helpers/validateCardNetwork';
import { cardNetwork } from './interfaces/cardNetwork';
import { cardNetworkAccumulator } from './interfaces/cardNetworkAccumulator';
import { validate } from './validator';

export type validateCardNumberCommand = Readonly<{
  cardNumber: string;
}>;

export function makeValidateCardNumberCommand() {
  return async function validateCardNumberCommand(command: validateCardNumberCommand) {
    await validate(command);

    return cardNetworks.reduce(
      (accumulator: cardNetworkAccumulator, cardNetwork: cardNetwork) => {
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
      {
        cardNetwork: 'Unknown',
        isValid: false,
      } as cardNetworkAccumulator,
    );
  };
}
