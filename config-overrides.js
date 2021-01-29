const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addPostcssPlugins,
} = require("customize-cra");

const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),
    
    // postcss
    addPostcssPlugins([require("tailwindcss"), require("autoprefixer")]),

    (config) =>
        rewireWebpackBundleAnalyzer(config, null, {
            analyzerMode: "static",
            generateStatsFile: false,
        })
);
