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
  plugins: ['react', 'react-hooks', '@typescript-eslint', '@typescript-eslint/eslint-plugin', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    'no-console': 'warn',
    'no-var': 'error',
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'type', 'index', 'sibling', 'parent'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {pattern: 'react',
          group: 'builtin'},
          {
            pattern: '@frontendTypes',
            group: 'type',
          },
          {
            pattern: '@backendTypes',
            group: 'type',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
          },
          {
            pattern: '@routes/**',
            group: 'internal',
          },
          {
            pattern: '@assets',
            group: 'internal',
          },
          {
            pattern: '@ui/**',
            group: 'internal',
          },
          {
            pattern: '@base/**',
            group: 'internal',
          },
          {
            pattern: '@templates/**',
            group: 'internal',
          },
          {
            pattern: '@pages/**',
            group: 'internal',
          },
          {
            pattern: '@forms/**',
            group: 'internal',
          },
          {
            pattern: '@services/**',
            group: 'internal',
          },
          {
            pattern: '@layouts',
            group: 'internal',
          },
          {
            pattern: '@context/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
