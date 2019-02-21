//require faker package for use
const faker = require('faker');
// loop ten times to console.log();
for( var i = 0; i < 10; i++ ) {
  let product = faker.commerce.product();
  let price = faker.commerce.price();
  console.log(`Item - ${product}: Price - $${price}`);
}
