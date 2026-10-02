import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('public'));

import fruitPackage from './util/fruitsUtil.js';
console.log(fruitPackage.slogan, fruitPackage.fruits);

const publicPath = path.resolve('public/');


app.get('/', (req, res) => {
  res.sendFile(publicPath + '/frontpage/frontpage.html');
});

app.get('/fruits', (req, res) => {
  res.sendFile(publicPath + '/fruits/fruits.html' );
});

app.get('/redirection', (req, res) => {
  res.sendFile(publicPath + '/redirection/redirection.html')
})

let counter = 0;

app.get('/api/counter', (req, res) => {
  res.send({
    data: ++counter,
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Server running on port', 8080);
});
