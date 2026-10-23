import express from 'express';
import pagesRouter from './routers/pagesRouter.js';
import plantsRouter from './routers/plantsRouter.js';

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.use(pagesRouter);
app.use(plantsRouter);

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log('An error occured: ', error);
    return;
  }

  console.log('app listening on port', server.address().port);
});
