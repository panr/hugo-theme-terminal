module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: "last 2 versions, >1%, not dead",
      },
    ],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
