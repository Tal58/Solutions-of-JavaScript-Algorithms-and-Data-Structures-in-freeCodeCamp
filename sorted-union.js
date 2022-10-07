function uniteUnique(arr) {

  let newArr = []
  for (const x of Object.values(arguments)){
    for (let i=0; i<x.length;i++){
      if (!newArr.includes(x[i])){
        newArr.push(x[i])
      }
    }
  }
  return newArr
  }

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);