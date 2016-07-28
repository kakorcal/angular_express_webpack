module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: `${__dirname}/client/javascripts/app.js`,
  resolve : {
    extension : ['', '.js'],
    packageMains: ['webpack', 'browser', 'web', 'main']
  },
  output: {
    path: '/',
    publicPath: 'http://localhost:4000/javascripts/',
    filename: 'bundle.js'
  }
};