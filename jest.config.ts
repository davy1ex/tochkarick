import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // or 'node' depending on your environment
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Add support for .ts and .tsx files
    '^.+\\.(js|ts|tsx|jsx)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx',, '.jsx'],
  setupFiles: ['./jest.setup.ts'],
  transformIgnorePatterns: [
    "/node_modules/(?!react-leaflet|other-esm-package)/",
  ],
  moduleNameMapper: {
    // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    
    // Mock styles (CSS, LESS, CSS-in-JS, etc.)
    '\\.(css|less|css.ts|css.js)$': '<rootDir>/__mocks__/styleMock.js',
  },
};

export default config;