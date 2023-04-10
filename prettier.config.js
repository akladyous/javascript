module.exports = {
  trailingCommma: 'all',
  arrowParens: 'always',
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.html'],
      options: {
        semi: true,
        tabWidth: 2,
      },
    },
  ],
  plugins: [
    // require("prettier-plugin-tailwindcss")
  ],
};
