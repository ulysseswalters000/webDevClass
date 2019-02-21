// install cat-me package with npm i
// this will install the needed package

// include the cat-me & knock knock packages for use
const catMe = require('cat-me');
const joke  = require('knock-knock-jokes');

// log a random cat to console
console.log(catMe());
// log random joke to console
console.log(joke());
