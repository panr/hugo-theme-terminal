const url = require("postcss-url");
const imports = require("postcss-import");
const nested = require("postcss-nested");
const postcssCustomMedia = require("postcss-custom-media");
const cssnano = require("cssnano");
const color = require("postcss-color-mod-function");
const mixins = require("postcss-mixins");

module.exports = () => ({
  plugins: [
    url,
    imports,
    mixins,
    nested,
    postcssCustomMedia,
    cssnano({
      preset: "default",
    }),
    color,
  ],
});
