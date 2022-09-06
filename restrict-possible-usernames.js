let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);



// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input


//2nd result

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)


// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input