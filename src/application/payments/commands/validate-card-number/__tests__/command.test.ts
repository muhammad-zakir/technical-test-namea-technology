import { makeValidateCardNumberCommand } from '../command';

describe('validateCardNumberCommand', () => {
  function setup() {
    const validateCardNumberCommand = makeValidateCardNumberCommand();

    return {
      validateCardNumberCommand
    };
  }

  describe('empty input', () => {
    it('should throw error response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('invalid input', () => {
    it('should throw error response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '123456789',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('valid input for Visa', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '412345678901',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('valid input for Visa', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '41234567890123456789',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Visa',
        isValid: true
      });
    });
  });

  describe('valid input for MasterCard', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '5233111222211112222',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'MasterCard',
        isValid: true
      });
    });
  });

  describe('invalid input for MasterCard', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '523311122221111',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('valid input for American Express', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '3788888888888888888',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'American Express',
        isValid: true
      });
    });
  });

  describe('invalid input for American Express', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '37888888888888',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('valid input for Discover', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '601112223334444412345',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Discover',
        isValid: true
      });
    });
  });

  describe('invalid input for Discover', () => {
    it('should return error response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '601112223334444',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });

  describe('valid input for Diners Club', () => {
    it('should return approriate response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '385695831234567899',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Diners Club',
        isValid: true
      });
    });
  });

  describe('invalid input for Diners Club', () => {
    it('should return error response', async () => {
      // Arrange
      const { validateCardNumberCommand } = setup();

      // Act
      const result = await validateCardNumberCommand({
        cardNumber: '3856958312345',
      });

      // Assert
      expect(result).toEqual({
        cardNetwork: 'Unknown',
        isValid: false
      });
    });
  });
});
