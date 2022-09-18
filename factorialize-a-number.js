function factorialize(num) {
  let mul=1
  for (let i=num; i>0; i--){
    mul*= i
  }
  num= mul
  return num;
}

factorialize(5);