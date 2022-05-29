module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Scorll a bit past:
  // https://tailwindcss.com/docs/configuration#core-plugins
  // to find a list of available corePlugins.
  corePlugins: ["alignSelf", "display", "height", "margin", "width"],
};
