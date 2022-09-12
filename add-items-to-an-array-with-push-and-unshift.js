function mixedNumbers(arr) {
  // Only change code below this line
 let arr1 = ['I', 2, 'three']
 let arr2 = [7, 'VIII', 9 ]
arr.unshift(...arr1)
arr.push(...arr2)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));