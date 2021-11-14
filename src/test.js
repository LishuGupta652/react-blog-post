function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create a function to find prime numbers btw two numbers
function primeNumber(min, max) {
  var prime = [];
  for (var i = min; i <= max; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}
