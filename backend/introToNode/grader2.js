function average(array){
  let sum = 0;
  array.forEach( (score) => {
    sum += score;
  });
  console.log( Math.round( sum / array.length ));
}
const scores = [ 98, 90, 89, 100, 100, 86, 94];
average(scores); // should evaluate to 94

var scores2 = [ 40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); // should evaluate to 68
