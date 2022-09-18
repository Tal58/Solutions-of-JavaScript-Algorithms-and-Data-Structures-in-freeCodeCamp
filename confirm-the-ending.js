function confirmEnding(str, target) {
  str = str.split(" ").join("")
  let counter = str.length-1
  let counter1 = 0;
  for(let i= target.length-1; i>=0; i--){
    if (target[i]===str[counter]){
      counter1++
      counter--
    }
  } return counter1 == target.length ? true:false
}

confirmEnding("Bastian", "n");