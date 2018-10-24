const { styles, theme } = require('./styleguide.styles');

module.exports = {
  components: 'src/components/**/*.jsx',
  sections: [
    { name: 'Components (js)', components: 'src/components/**/*.js' },
    { name: 'Components (jsx)', components: 'src/components/**/*.jsx' },
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  styles,
  theme,
};
