//var webpackConfig = require('./webpack.config');
//webpackConfig.entry = {};
//webpackConfig.output= {};
//webpackConfig.plugins= {};
//webpackConfig.devServer= {};
//console.log(webpackConfig);

// Karma configuration
// Generated on Thu Jun 02 2016 15:23:35 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine'],
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
      './tests.webpack.js'
      //'./src/**/*.js',
      //'./test/**/*[sS]pec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['webpack','sourcemap']
      //'test/**/*[sS]pec.js': ['webpack','sourcemap']
      //'test/**/*[sS]pec.js': ['babel']
    },
    //babelPreprocessor: {
    //  options: {
    //    presets: ['es2015'],
    //    sourceMap: 'inline'
    //  }
    //},

    // weppack: webpackConfig, // it may not work.
    webpack: { // work fine
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'stage-0', 'react'] }
        },{
          test: /\.json$/,
          loader: 'json'
        }]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      //'karma-babel-preprocessor',
      'karma-webpack',
      //'karma-jasmine',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
