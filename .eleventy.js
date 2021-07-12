module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
      files: './public/css/**/*.css'
    });
  };

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
