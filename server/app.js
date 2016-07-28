const express = require('express');
const webpack = require('webpack');
const app = express();
const PORT = process.env.PORT || 4000;


app.use('/javascripts', express.static(`${__dirname}/../client/javascripts`));
app.use('/stylesheets', express.static(`${__dirname}/../client/stylesheets`));
app.use('/views', express.static(`${__dirname}/../client/views`));

app.use(require('morgan')('tiny'));

if(PORT === 4000){
  const devConfig = require('../webpack.config');
  const compiler = webpack(devConfig);
  app.use(require('webpack-dev-middleware')(compiler));
  console.log(devConfig);
}

app.get('*', (req, res)=>{
  res.sendFile('/views/layout.html', {root: './client'});
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});