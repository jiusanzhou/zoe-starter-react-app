const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
} = require("customize-cra")

const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

module.exports = {
    webpack: override(
        // enable legacy decorators babel plugin
        addDecoratorsLegacy(),
      
        // disable eslint in webpack
        disableEsLint(),
        
        // (config) => rewireWebpackBundleAnalyzer(config, null, {
        //     analyzerMode: 'static',
        //     generateStatsFile: true,
        //     // reportFilename: 'report.html'
        // }),
    )
}