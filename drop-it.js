
function dropElements(arr, func) {
  for (let x=0; x<arr.length; x++){
   if ([arr[x]].filter(func).length>0){
return arr.splice(x)
   }

  }
  return []
}

dropElements([1, 2, 3], function(n) {return n < 3; });