const scores = [
    [78, 81, 84],
    [55, 54, 62],
    [89, 71, 90],
  ];
total = 0
count = 0

  for (const score of scores) {
    for (const element of score) {
      total += (element);
      count ++
      let i = 0; i < scores.length; i++
      let j = 0; j < scores[i].length; j++
    }
  }
  let max = scores[0][0]; 

  for (const scoreArray of scores) {
    for (const element of scoreArray) {
    if (element > max) {
     max = element; 
  }
 }
}

console.log('Total:',total)
const average = total / count; 
console.log('Average score:', average);
console.log('Maximum score:', max);
