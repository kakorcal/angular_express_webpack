module.exports = {
  devtool: 'inline-source-map',
  debug: true,
  entry: `${__dirname}/client/javascripts/app.js`,
  output: {
    path: '/',
    publicPath: 'http://localhost:4000/javascripts/',
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