[
  {
    env: {
      browser: true,
      es2020: true,
    },
    extends: [
      'prettier',
      'prettier/standard',
      'prettier/react',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: ['prettier', 'react'],
    rules: {},
  },
];
