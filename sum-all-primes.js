function sumPrimes(num) {
  let sum =0;
  function prime(num){
    let counter = 0;
    for (let i=2; i<= num; i++){
      if (num%i ===0){
        counter++
      }
    }if (counter ===1){
      return true
    }else{
      return false
    }
  }
  if (num>=2){
    for (let i=2; i<=num; i++){
      if(prime(i)){
        sum+=i
      }
    }
  }
  else {
    return 0
  }
  return sum;
}

sumPrimes(10);