import express from 'express';
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log('An error occured: ', error);
    return;
  }

  console.log('app listening on port ', server.address().port);
});
