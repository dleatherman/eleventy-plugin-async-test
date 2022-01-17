const plugin = require('../')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(plugin);
  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src'
    },
  }
};
