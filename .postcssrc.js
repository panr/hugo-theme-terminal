const url = require("postcss-url");
const imports = require("postcss-import");
const nested = require("postcss-nested");
const postCSSPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");
const color = require("postcss-color-mod-function");
const mixins = require("postcss-mixins");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = () => ({
  plugins: [
    tailwindcss,
    autoprefixer,
    url,
    imports,
    mixins,
    nested,
    postCSSPresetEnv({
      stage: 1,
      preserve: true,
      features: {
        "custom-properties": true,
      },
    }),
    cssnano({
      preset: "default",
    }),
    color,
  ],
});
