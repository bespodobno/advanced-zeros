module.exports = function getZerosCount(number, base) {
 
  let primeFactors =[];
  primeFactors = findPrimeFactors (base);
  let max = Math.max.apply(null, primeFactors);
  let n = findLargestpower(number, max);
  let count = calculateRepetitions(primeFactors,max);
  let res =  Math.floor(n/count);
  return res;
}
function calculateRepetitions(primeFactors,max){
  let count=0;

  for( let i=0; i< primeFactors.length; i++){
     if( max == primeFactors[i] ) count++;
    }
  return count;
}
//https://www.geeksforgeeks.org/number-of-trailing-zeroes-in-base-b-representation-of-n/
//http://cppalgo.blogspot.com/2011/04/1.html марсианские факториалы

//найти max prime factor!!! 
//let max = Math.max.apply(null, primeFactors); 

function findPrimeFactors (num) {

  let primeFactors = [];
  while (num % 2 === 0) {
      primeFactors.push(2);
      num = num / 2;
  }
  
  let sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i++) {
      while (num % i === 0) {
          primeFactors.push(i);
          num = num / i;
      }
  }
  
  if (num > 2) {
      primeFactors.push(num);
  }
  return primeFactors;
}
function  findLargestpower(n, p) 
    { 
        // Initialize result 
        let ans = 0; 
  
        // Calculate x = n/p + n/(p^2) + n/(p^3) + .... 
        while (n > 0) 
        { 
            n =Math.floor(n/p); 

            ans +=  Math.floor(n); 
        } 
        return ans; 
    } 