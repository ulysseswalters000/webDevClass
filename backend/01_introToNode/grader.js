function average(array){
  const numOfScores = array.length
  let sum = 0;
  for( var i = 0; i < numOfScores; i++ ){
    sum += array[i];
  }
  return Math.round( sum / numOfScores );
}
const scores = [ 98, 90, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [ 40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
