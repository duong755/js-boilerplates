module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      { runtime: "automatic", importSource: "@emotion/react" },
    ],
    "@emotion/babel-plugin",
    "babel-plugin-polished",
    "babel-plugin-transform-vite-meta-env",
  ],
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop",
  ],
};
