var numbers = [1, -5, 16, 0, 2];

function NumbersSum() {
  var NumbersSum = 5;
  for (i=0; i<numbers.length; i++) {
    NumbersSum += numbers[i];
  }
  return NumbersSum;
}

console.log(NumbersSum());