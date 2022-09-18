function chunkArrayInGroups(arr, size) {
  let newArr = []
  if (arr.length % size ==0){
    for (let i =0; i<arr.length; i+=size){
      newArr.push(arr.slice(i,i+size))
    }
  }   else{
    for (let i =0; i<arr.length-(arr.length % size); i+=size){
      newArr.push(arr.slice(i,i+size))
    }newArr.push(arr.slice(arr.length-(arr.length % size),arr.length-1+arr.length % size))
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);