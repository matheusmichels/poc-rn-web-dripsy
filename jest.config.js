module.exports = {
  preset: 'jest-expo',
  setupFiles: [
    '<rootDir>/node_modules/react-native/jest/setup.js',
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|dripsy|@dripsy|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*)',
  ],
};
