export default {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
      // Ejemplo: reglas típicas que aplican a NestJS
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};