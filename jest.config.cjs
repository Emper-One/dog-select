const esModules = ['axios'].join('|')
module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};