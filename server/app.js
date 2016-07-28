const express = require('express');
const webpack = require('webpack');
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/javascripts', express.static(`${__dirname}/../client/javascripts`));
app.use('/stylesheets', express.static(`${__dirname}/../client/stylesheets`));
app.use('/views', express.static(`${__dirname}/../client/views`));

app.use(require('morgan')('tiny'));

if(process.env.NODE_ENV !== 'production'){
  const devConfig = require('../webpack.config');
  const compiler = webpack(devConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    stats: {colors: true}
  }));
  console.log(devConfig);
}

app.get('*', (req, res)=>{
  res.sendFile('/views/layout.html', {root: './client'});
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});