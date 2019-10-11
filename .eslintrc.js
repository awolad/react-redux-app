module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-console': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
    'react/static-property-placement': [0],
    'react/no-array-index-key': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'global-require': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
