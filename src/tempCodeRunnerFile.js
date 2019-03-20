module.exports = function getZerosCount(number, base) {

  let primeFactors = [];
  primeFactors = findPrimeFactors(base);
  console.log("Prime factors: ", primeFactors);

  //for every prime factor find power and devide on repetitions
  let arrayOfAmountNulls = findArrayOfLargestpower(number, primeFactors);
  console.log("arrayOfAmountNulls: ", arrayOfAmountNulls);

  let res = Math.min.apply(null, arrayOfAmountNulls);
  return res;
}

//https://www.geeksforgeeks.org/number-of-trailing-zeroes-in-base-b-representation-of-n/
//http://cppalgo.blogspot.com/2011/04/1.html марсианские факториалы

function findPrimeFactors(num) {

  let primeFactors = [];
  while (num % 2 == 0) {
    primeFactors.push(2);
    num = num / 2;
  }

  let sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i++) {
    while (num % i == 0) {
      primeFactors.push(i);
      num = num / i;
    }
  }

  if (num > 2) {
    primeFactors.push(num);
  }
  return primeFactors;
}
function findArrayOfLargestpower(n, primeFactors) {
  // Initialize result 

  let arr = [];
  let p;
  let ans;

  for (let i = 0; i < primeFactors.length; i++) {
    p = primeFactors[i];
    ans = 0

    if (i == 0) {
      ans = findLargestpower(n, p) / calculateRepetitions(primeFactors, p);
      arr.push(Math.floor(ans));
    }
    else if (p != primeFactors[i - 1]) {
      ans = findLargestpower(n, p) / calculateRepetitions(primeFactors, p);
      arr.push(Math.floor(ans));
    }
  }
  return arr;
}
function findLargestpower(n, p) {
  // Initialize result 
  let ans = 0;

  // Calculate x = n/p + n/(p^2) + n/(p^3) + .... 
  while (n > 0) {
    n = Math.floor(n / p);

    ans += Math.floor(n);
  }
  return ans;
}
function calculateRepetitions(primeFactors, number) {
  let count = 0;

  for (let i = 0; i < primeFactors.length; i++) {
    if (number === primeFactors[i]) count++;
  }
  return count;
}