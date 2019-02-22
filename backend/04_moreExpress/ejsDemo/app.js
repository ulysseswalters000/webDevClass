const express = require('express');
const app = express();


// ROUTES
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  let thing = req.params.thing;
  res.render('love.ejs', {thing: thing});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server listening on port 3000');
});
