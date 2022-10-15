
function convertHTML(str) {
  let newArr = str.split("")
  console.log(newArr)
  let Arr = []
 
 console.log(newArr.includes(`"`))
 if (newArr.includes("&")){
  newArr.map((x)=>{
    x === "&" ? Arr.push("&amp;"): Arr.push(x)
  })
  return Arr.join("");
   
  }else  if (newArr.includes("<")){
    newArr.map((x)=>{
      x === "<" ? Arr.push("&lt;"): x === ">" ? Arr.push("&gt;") :Arr.push(x)}) 
      return Arr.join("");
     
  }else if (newArr.includes(">")){
    newArr.map((x)=>{
      x === ">" ? Arr.push("&gt;"): Arr.push(x)})
      return Arr.join("");
  }
   
  else  if (newArr.includes(`'`)){
    newArr.map((x)=>{
      x === `'` ? Arr.push("&apos;"):Arr.push(x)})
      return Arr.join("");
  }
 
  else  if (newArr.includes(`"`)){
    newArr.map((x)=>{
      x === `"` ? Arr.push("&quot;"):Arr.push(x)})
      return Arr.join("");
  }
  console.log(Arr.join(""));
  
    return str
  
 
  
}


convertHTML("Dolce & Gabbana");