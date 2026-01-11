const yaml = require("js-yaml");
require('dotenv').config();

const pluginImages = require("./eleventy.config.images.js");

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? `localhost:8081` : `https://www.joy-jade.com`;

const toAbsoluteUrl = (url) => {
  return new URL(url, baseUrl).href;
}

module.exports = function(eleventyConfig) {

  eleventyConfig.setTemplateFormats("html,css,js,njk,ttf");

  eleventyConfig.addPassthroughCopy("src/assets/global.css");
  eleventyConfig.addPassthroughCopy("src/assets/type");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/site.js");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("linkungan", (x) => {
    if (process.env.NODE_ENV === 'development') {
      return `linkungan: dev`
    } else {
      return 'not dev'
    }
  });

  eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
  
  //App plugins
  eleventyConfig.addPlugin(pluginImages);

  // config to choose where you want your source files and public files
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,

    templateFormats: [
			"md",
			"njk",
			"html"
		],

    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "_site",
      data:'_data',
      output: "_site",
    },

    pathPrefix: "/",

  };
}