function mutation(arr) {
  let counter = 0;
 let newArr1 = arr[0].toLowerCase()
 let newArr2 = arr[1].toLowerCase()
 for (let i=0; i<newArr2.length; i++){
  if (newArr1.includes(newArr2[i])){
    counter++
  }
 }
return counter ==newArr2.length ? true:false
}
mutation(["hello", "hey"]);