function urlSlug(title) {
  let newArr = title.split(/\W/)
  console.log(newArr)
  let newArr2 = []
  for (const x of newArr){
    if (x == ""){

    }else {
      newArr2.push(x.toLowerCase()+"-")
    }
  }
 return newArr2.join("").slice(0,-1)
 }