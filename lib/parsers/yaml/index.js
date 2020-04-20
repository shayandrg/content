const yaml = require('js-yaml')

class Yaml {
  constructor (context, options) {
    this.options = options
  }

  /**
   * Converts yaml document to it's JSON structure.
   * @param {string} file - Yaml file
   * @return {Object}
   */
  toJSON (file) {
    return yaml.load(file, { json: true, ...this.options })
  }
}

module.exports = Yaml