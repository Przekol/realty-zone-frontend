module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'type', 'index', 'sibling', 'parent'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      }
    ],
  },
  settings: {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
        'project': ['./tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
