  const {injectBabelPlugin} = require('react-app-rewired')
const rewireEslint = require('react-app-rewire-eslint')

module.exports = function override (config, env) {
  config = injectBabelPlugin('styled-jsx/babel', config)
  return config
}
