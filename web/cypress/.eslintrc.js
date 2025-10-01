module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
  ],
  plugins: [
    'cypress',
  ],
  rules: {
    // Regras específicas para testes do Cypress
    'cypress/no-unnecessary-waiting': 'warn',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
  },
};
