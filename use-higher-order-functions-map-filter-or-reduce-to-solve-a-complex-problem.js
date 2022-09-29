const squareList = arr => {
  // Only change code below this line
  arr = arr.filter(data => data>0 && Math.floor(data) == data)
  arr = arr.map(data => data*data)
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
