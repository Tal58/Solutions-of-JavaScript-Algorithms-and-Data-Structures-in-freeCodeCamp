function frankenSplice(arr1, arr2, n) {
  if (n>0){
    let newArr = arr2.slice()
    newArr.splice(n,0,...arr1)
    return newArr
  }else{
    return arr1
  }
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);