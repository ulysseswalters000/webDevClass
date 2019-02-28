const express = require('express');
const app = express();

// View engine setup
  // use statements
  app.use(express.static('public'));

  // set statements
  app.set('view engine', 'ejs');


// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  let thing = req.params.thing;
  res.render('love', {thing: thing});
});

app.get('/posts', (req, res) => {
  let posts = [
    {
      title: 'Post 1',
      author: 'Suzy'
    },
    {
      title: 'Post 2',
      author: 'Andrew'
    },
    {
      title: 'Post 3',
      author: 'Jessica'
    }
  ]
  res.render('posts', {posts: posts});
});

app.listen(process.env.PORT || 8080, () => {
  console.log('server listening on port 8080');
});
