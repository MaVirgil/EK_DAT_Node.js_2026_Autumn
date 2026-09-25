const express = require('express');
const app = express();

const SERVER_STARTED_AT = Date.now();

app.get('/months/v1', (req, res) => {
  console.log('got request');

  const currentMonth = new Date().toDateString().split(' ')[1];

  console.log(currentMonth);

  res.send({
    data: currentMonth,
  });
});

app.get('/months/v2', (req, res) => {
  console.log('got request');

  const currentMonth = new Date().toLocaleString('en-GB', { month: 'long' });

  console.log(currentMonth);

  res.send({
    data: currentMonth,
  });
});

app.get('/days', (req, res) => {
  const today = new Date().toLocaleDateString('en-UK', { weekday: 'long' });

  res.send({
    data: today,
  });
});

app.get('/uptime/v1', (req, res) => {
  const differenceInMiliseconds = Date.now() - SERVER_STARTED_AT;

  const uptimeInSeconds = Math.floor((differenceInMiliseconds) / 1000);
  const uptimeInMinutes = Math.floor(uptimeInSeconds / 60);
  const upTimeInHours = Math.floor(uptimeInMinutes / 60);

  res.send({
    data: `Server has been running for ${upTimeInHours} hours, ${uptimeInMinutes % 60} minutes and ${uptimeInSeconds % 60} seconds`,
  });
});


app.listen(8080, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Server listening on port', 8080);
});
