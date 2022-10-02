
function destroyer(arr) {
  let newArr = [...arguments]
  let newArr2 = newArr.shift()
  let newArr3 = []
  console.log(newArr)
  console.log(newArr2)
  for (const x of newArr2){
    if (!newArr.includes(x)){
      newArr3.push(x)
    }
  }
  return newArr3
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);