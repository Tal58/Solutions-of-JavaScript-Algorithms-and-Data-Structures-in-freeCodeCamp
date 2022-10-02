function diffArray(arr1, arr2) {
  const newArr = [];
  for (const x of arr1){
    if (!arr2.includes(x)){
      newArr.push(x)
    }
  }
  for (const x of arr2){
    if (!arr1.includes(x)){
      newArr.push(x)
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);