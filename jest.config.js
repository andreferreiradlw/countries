const { compilerOptions } = require('./tsconfig');
const { pathsToModuleNameMapper } = require('ts-jest');

const typescriptAliases = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' });
const mocks = {
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/jest/__mocks__/fileMock.js',
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: Object.assign(mocks, typescriptAliases),
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupJestAfterEnv.js'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
