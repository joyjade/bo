module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/global.css");
  eleventyConfig.addPassthroughCopy("assets/type");
}