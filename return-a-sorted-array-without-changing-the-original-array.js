const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

let newArr = [...arr]
return newArr.sort(function(a,b){
    return a===b ? 0: a>b? 1:-1;
})

  // Only change code above this line
}

nonMutatingSort(globalArray);