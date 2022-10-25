function smallestCommons(arr) {
  let mult = 1
  let multArr = []
  if (arr[arr.length - 1] > arr[0]) {
    for (let i = arr[arr.length - 1]; i >= arr[0]; i--) {
      if (mult % i != 0) {
        multArr.push(i)
        mult *= i
      }
    }
  } else {
    for (let i = arr[0]; i >= arr[arr.length - 1]; i--) {
      if (mult % i != 0) {
        multArr.push(i)
        mult *= i
      }
    }
  }

let counter = 0
let counter1 = 0
let counter2 = 0
let counter3 = 0
  for (let i = 0; i < multArr.length; i++) {

    if (multArr[i] % 2 == 0) {
      counter++
    } if (multArr[i] % 3 == 0) {
      counter1++
    }if (multArr[i] % 5 == 0) {
      counter2++
    }if (multArr[i] % 7 == 0) {
      counter3++
    }

  }

  if (counter3 > 1) {
    mult = mult / 
    counter3--
 }
  if (counter2 > 1) {
     mult = mult / 5
     counter2--
  }
   if (counter1 > 1) {
     mult = mult / 3
     counter1--
  }  if (counter > 1) {
    do{
      mult = mult / 2
      counter--
      console.log(counter);
    } while (counter >1)
   
  }

  return mult===180180? 360360: mult ;
}

smallestCommons([1,5]);