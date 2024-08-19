import { Config } from '@jest/types';
import dotenv from 'dotenv';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

dotenv.config();

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/application/payments/**/*.ts', '!src/**/__tests__/*.ts'],
  projects: [
    {
      displayName: 'unit-tests',
      testMatch: ['<rootDir>/src/**/*.test.ts'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
    },
    {
      displayName: 'functional-tests',
      testMatch: ['<rootDir>/tests/**/*.test.ts'],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
    },
  ],
};

export default config;
