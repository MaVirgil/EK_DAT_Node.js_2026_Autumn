const express = require('express');
const PORT = 8080;

const app = express();
app.use(express.json());

const animals = [
  {
    id: 1,
    name: "Parrot",
    age: 34
  },
  {
    id: 2,
    name: "Pelican",
    age: 12,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Australian_Pelican_showing_large_pouch.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  }
];

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.get('/xss', (req, res) => {
  res.sendFile(`${__dirname}/crossSideScripting.html`);
})

app.get('/animals', (req, res) => {
  res.send({
    data: animals
  })
});

app.get('/animals/:id', (req, res) => {
  const idParam = Number(req.params.id);

  const foundAnimal = animals.find((animal) => animal.id === idParam);

  if (!foundAnimal) {
    res.status(404);

    res.send({
      data: `No animal found with id: ${idParam}`
    });

    return;
  }

  res.send({
    data: foundAnimal
  });
})

app.post('/dictators', (req, res) => {
  console.log(req.body);

  res.send({})
});

app.patch('/dictators/:name', (req, res) => {
  const body = req.body;
  const nameParam = req.params.name;

  console.log(body);

  res.send({
    data: `you have turned the dictator ${nameParam} benevolent for life`
  });
})

app.listen(PORT);
console.log(`App running on http://localhost:${PORT}`);