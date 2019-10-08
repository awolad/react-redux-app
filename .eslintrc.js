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
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
};
