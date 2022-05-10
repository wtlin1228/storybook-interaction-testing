module.exports = {
  collectCoverageFrom: ["./stories/**.jsx"],
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};
