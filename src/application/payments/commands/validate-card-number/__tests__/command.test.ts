import { ValidationException } from '@application/common/exceptions';
import { makeValidateCardNumberCommand } from '../command';

describe('validateCardNumberCommand', () => {
  function setup() {
    const validateCardNumberCommand = makeValidateCardNumberCommand();

    return {
      validateCardNumberCommand
    };
  }

  describe('empty input', () => {
    it('should throw a validation exception', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = validateCardNumberCommand({
        cardNumber: '', // Cannot be empty
      });

      // Assert
      await expect(result).rejects.toThrow(ValidationException);
    });
  });

  describe('invalid input', () => {
    it('should also throw a validation exception', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = validateCardNumberCommand({
        cardNumber: '123456789', // Less than required number of characters
      });
      
      // Assert
      await expect(result).rejects.toThrow(ValidationException);
    });
  });
  
  describe('valid input', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '1234567890123',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Nganu',
        isValid: true
      });
    });
  });
});
