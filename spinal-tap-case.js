

function spinalCase(str) {
  let newArr = [];
  const regex = /[A-z]/
  str = str.split("")
  for (const x of str){    
    if (Boolean(x.match(regex))){
     if(x == "_"){}
      
      else if (str[0] ==x){
        newArr.push(x.toLowerCase())
      }else if (x.toUpperCase()==x){
        if (newArr[newArr.length-1] != "-"){
          newArr.push("-")
        }
        newArr.push(x.toLowerCase())
      }else{
        newArr.push(x.toLowerCase())
      }
     
    }
    else{
      if (newArr[newArr.length-1] != "-"){
        newArr.push("-")
      }
     
    }
}newArr= newArr.join("")
console.log(newArr)
return newArr
}
spinalCase('This Is Spinal Tap');