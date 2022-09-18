function titleCase(str) {
  let newArr = []
  str = str.toLowerCase().split(" ")
  for (const x of str){
    const Y = x[0].toUpperCase() + x.slice(1)
    newArr.push(Y)
  } 
  return newArr.join(" ");
}

titleCase("I'm a little tea pot");