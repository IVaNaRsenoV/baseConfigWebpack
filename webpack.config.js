const { merge } = require("webpack-merge");

const configs = [
  require("./webpack/webpack.common.js"),
  require("./webpack/webpack.style.js"),
  require("./webpack/webpack.ts.js"),
  require("./webpack/webpack.html.js"),
  require("./webpack/webpack.alias.js"),
];

function reduceConfig(configs) {
  return configs.reduce((prevConfig, currentConfig) => {
    return merge(prevConfig, currentConfig);
  });
}

module.exports = () => {
  const mergedConfigs = reduceConfig(configs);
  return { ...mergedConfigs };
};
