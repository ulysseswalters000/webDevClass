const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hi there!');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

app.get('/dog', (req, res) => {
  res.send("MEOW");
});

app.get('/r/:subName', (req, res) => {
  let subName = req.params.subName;
  res.send(`hello from ${subName.toUpperCase()}`);
});

app.get('*', (req, res) => {
  res.send('You are a *');
});

let PORT = (process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
