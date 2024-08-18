import { cardNetwork } from '../interfaces/cardNetwork';

export const cardNetworks: Array<cardNetwork> = [
  {
    length: {
      minimum: 15,
      maximum: 21,
    },
    name: 'American Express',
    prefixes: [34, 37],
    rangedPrefixes: [
      {
        minimum: 88880,
        maximum: 88889,
      },
    ],
  },
  {
    length: {
      minimum: 14,
      maximum: 22,
    },
    name: 'Diners Club',
    prefixes: [35],
    rangedPrefixes: [
      {
        minimum: 300,
        maximum: 305,
      },
      {
        minimum: 4567,
        maximum: 4999,
      },
    ],
  },
  {
    length: {
      minimum: 16,
      maximum: 23,
    },
    name: 'Discover',
    prefixes: [6011, 1234],
    rangedPrefixes: [
      {
        minimum: 622126,
        maximum: 622925,
      },
    ],
  },
  {
    length: {
      minimum: 16,
      maximum: 20,
    },
    name: 'Master Card',
    prefixes: [5],
    rangedPrefixes: [
      {
        minimum: 2221,
        maximum: 2720,
      },
    ],
  },
  {
    length: {
      minimum: 13,
      maximum: 22,
    },
    name: 'Visa',
    prefixes: [4],
    rangedPrefixes: [],
  },
] as const;
