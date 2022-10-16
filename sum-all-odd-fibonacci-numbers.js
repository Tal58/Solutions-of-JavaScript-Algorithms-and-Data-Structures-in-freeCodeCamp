function sumFibs(num) {
  if (num ===1){
    return 1
  }
  let prev =1
  let next =1
  let notr =0
  let total =2
  while (next<num){
    if (notr%2 !==0){
      console.log("notr is", notr);
          total += notr
          console.log("total is :", total);
        }

    notr = prev+next
    prev=next
    next= notr
    console.log(next);
   
    
  }
  
  return num%2 ===0 ? total: total+next;
}

sumFibs(4);