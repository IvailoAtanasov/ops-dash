/* eslint-disable react-hooks/rules-of-hooks */
/* config-overrides.js */
const { override, addBabelPreset } = require('customize-cra')
module.exports = override(
  addBabelPreset('@emotion/babel-plugin')
)
