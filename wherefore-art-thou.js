function whatIsInAName(collection, source) {
let newArr = []
for (const y of collection){
  let counter = 0;
for (const x of Object.keys(source)){   
    if (y[x] == source[x]){
      counter++
      if (counter == Object.keys(source).length){
        newArr.push(y)
      }
    }
  }
}return newArr
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });