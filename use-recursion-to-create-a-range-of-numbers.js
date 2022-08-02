function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
        return [];
    } else {        
      const myArray = rangeOfNumbers(startNum + 1, endNum);
      myArray.unshift(startNum);
      return myArray;
    }
};