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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
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
