module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error'],
    // 'vue/component-name-in-template-casing': [
    //   'warn',
    //   'PascalCase' | 'kebab-case',
    //   {
    //     registeredComponentsOnly: true,
    //     ignores: [],
    //   },
    // ],
  },
};