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

let PORT = (process.env.PORT || 3000);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
