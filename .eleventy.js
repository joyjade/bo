const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats("html,css,njk,ttf");

  eleventyConfig.addPassthroughCopy("src/assets/global.css");
  eleventyConfig.addPassthroughCopy("src/assets/type");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  // config to choose where you want your source files and public files
  return {
    dir: {
      input: "src",
      output: "_site",
      data:'_data'
    }
  };
}