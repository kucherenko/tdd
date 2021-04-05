/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "mocha",
  coverageAnalysis: "perTest",
  "mochaOptions": {
    "spec": [ "tests/**/*.spec.ts" ],
  }

};
