
numbers=[1,10,19,30,50]
let sum = 0;

for (const number of numbers) {
  sum += number;
  if (sum >= 50) {
    break;
  }
  console.log(sum);
} //???