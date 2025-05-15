export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
       "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "no-console": "off",
      "capitalized-comments": ["warn", "always"],
      "no-undef": "error", // detecta variables no declaradas
      "init-declarations": ["error", "always"], // fuerza inicializar variables declaradas con let o const
    },
  },
];
