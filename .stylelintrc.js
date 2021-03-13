module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  ignoreFiles: ['**/*.md'],
  rules: {
    // recommended rules for scss
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
