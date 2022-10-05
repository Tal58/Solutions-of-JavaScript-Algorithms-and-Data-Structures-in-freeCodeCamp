function fearNotLetter(str) {
  let num = str.charCodeAt(0)
  for (let i=1; i<str.length; i++){
    if ((str[i].charCodeAt(0)-num)==1){
      num = str[i].charCodeAt(0)
    }else{
      return String.fromCharCode(num+1);
    }
  }
  
}
fearNotLetter("abce");