const { getJestConfig } = require("@storybook/test-runner");

const defaultJestConfig = getJestConfig();

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...defaultJestConfig,
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  // collectCoverage: true,
  // collectCoverageFrom: ["**/*.jsx", "!**/node_modules/**", "!**/vendor/**"],
  testEnvironmentOptions: {
    ...defaultJestConfig.testEnvironmentOptions,
    "jest-playwright": {
      ...defaultJestConfig.testEnvironmentOptions["jest-playwright"],
      // Options...
      collectCoverage: true,
    },
  },
};
