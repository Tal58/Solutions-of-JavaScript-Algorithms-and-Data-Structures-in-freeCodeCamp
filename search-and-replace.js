function myReplace(str, before, after) {
  if (before[0].toUpperCase()==before[0]){
    str = str.replace(before,after[0].toUpperCase()+after.slice(1))
  }else if (after[0].toUpperCase()==after[0]){
    str = str.replace(before,after[0].toLowerCase()+after.slice(1))
  }else{
str = str.replace(before,after)
  }  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");