function bouncer(arr) {
  let newArr = []
  for (const x of arr){
    if (x){
      newArr.push(x)
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);