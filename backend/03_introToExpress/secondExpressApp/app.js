const express = require('express');
const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('hi there, welcome to my assigment');
});

app.get('/speak/:animal', (req, res) => {
  // stores parameter in mutable variable
  let animal = req.params.animal.toLowerCase();
  // sends the return value of speak when passed param val
  res.send(speak(animal));

  // defines speak function, taking in animal as argv
  function speak(animal) {
    // defines key as the value of the passed arg
    let key = animal;
    // defines the obj of 'known' sounds
    let animals = {
      pig: 'Oink',
      cow: 'Moo',
      dog: 'Woof Woof!',
      cat: 'Meow'
    }

    // if else that checks if animals has the key property
    if (animals.hasOwnProperty(key)){
      // if animals obj has the key
      // return a string saying the param name + its value pair
      return `The ${animal} says ${animals[key]}`;
    } else {
      // if key doesnt exist in the obj
      // return the param value in a string
      return `The ${animal} doesn't make a sound we know of...`;
    }
  }
});

app.get('/repeat/:word/:nTimes', (req, res) => {
  // set req parameters to variables
  let repeatedWord = req.params.word;
  let numTimes = parseInt(req.params.nTimes);

  // send the desired output to user based on input
  res.send(repeater(repeatedWord, numTimes));

  // function that accumulates a string to repeat a word n times
  function repeater(word, times) {
    let str = ``;
    for(let i = 0; i < times; i++) {
      str += `${word} `;
    }
     return str;
  }
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found');
});


app.listen(process.env.PORT || 3000, () => {
  console.log('app listening on port 3000');
});
