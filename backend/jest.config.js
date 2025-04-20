// jest.config.js (en la raíz, junto a package.json)
module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.js'],    // sólo ejecuta tests bajo tests/
    testTimeout: 60000                        // timeout global 20s
  };
  