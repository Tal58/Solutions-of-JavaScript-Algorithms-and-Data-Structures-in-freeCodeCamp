function pairElement(str) {
  let newArr = str.split("")
  let newArr2 = []
  for (const x of newArr){
    if (x == "A"){
      newArr2.push(["A","T"])
    }else if (x=="T"){
      newArr2.push(["T","A"])
    }else if (x=="C"){
      newArr2.push(["C","G"])
    }else{
      newArr2.push(["G","C"])
    }
  }
  return newArr2;
}

pairElement("GCG");