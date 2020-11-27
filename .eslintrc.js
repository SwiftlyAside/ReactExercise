// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'warn',
  },
};
