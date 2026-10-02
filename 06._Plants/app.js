import express from 'express';
const app = express();

app.listen(8080, (error) => {
  if (error) {
    console.log('An error occured: ', error);
    return;
  }

  console.log('app listening on port, ', 8080);
});
