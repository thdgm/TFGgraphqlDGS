let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_16_05_2023/build/js/packages/multiplatformKotlin/kotlin/multiplatformKotlin.js"]
};

config.output = {
    path: "/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_16_05_2023/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "multiplatformKotlin.js"
            : "multiplatformKotlin-[name].js";
    },
    library: "multiplatformKotlin",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_16_05_2023/build/processedResources/js/main"
  ],
  "client": {
    "overlay": {
      "errors": true,
      "warnings": false
    }
  }
};

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_16_05_2023/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_16_05_2023/build/reports/webpack/multiplatformKotlin/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
