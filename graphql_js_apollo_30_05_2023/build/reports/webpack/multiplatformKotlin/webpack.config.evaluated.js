{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_30_05_2023/build/js/packages/multiplatformKotlin/kotlin/multiplatformKotlin.js'
    ]
  },
  output: {
    path: '/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_30_05_2023/build/distributions',
    filename: [Function: filename],
    library: 'multiplatformKotlin',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/diegogarcia/Desktop/TFG/Diego/TFGgraphqlDGS/graphql_js_apollo_30_05_2023/build/processedResources/js/main'
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  stats: {
    warnings: false,
    errors: false
  }
}