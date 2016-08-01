module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  entry: `${__dirname}/client/javascripts/app.js`,
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /js?$/,
        exclude: /node_modules/
      }
    ]
  }
};