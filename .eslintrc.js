module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
  scripts: {
    lint: 'eslint "src/**/*.{js,jsx,ts,tsx}"',
    'lint:fix': 'eslint --fix "src/**/*.{js,jsx,ts,tsx}"',
    format:
      'prettier --write "src/**/*.{js,jsx,ts,tsx,css,md}" --config ./.prettierrc.json',
  },
}
