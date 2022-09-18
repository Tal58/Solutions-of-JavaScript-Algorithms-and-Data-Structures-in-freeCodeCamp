function getIndexToIns(arr, num) {
  let counter=0
  arr = arr.sort()
  console.log(arr)
  for (const x of arr){
    if (num>x){
      counter++
    }
   
  }
return counter
}

getIndexToIns([40, 60], 50);