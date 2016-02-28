module.exports = {
  entry: './src/app.ts',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resoleve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
