module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: './client/javascripts/app.js',
  output: {
    path: '/',
    publicPath: 'http://localhost:4000/javascripts/',
    filename: 'bundle.js'
  }
};