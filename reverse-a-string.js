function reverseString(str) {
  let newArr= ""
  for (let i=str.length; i>0, i--;){
    newArr +=str[i]
  }
  str = newArr
  return str;
}

reverseString("hello");