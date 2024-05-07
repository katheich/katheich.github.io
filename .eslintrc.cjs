module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: 'warn',
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/no-array-index-key': 1,
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-absolute-path': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
