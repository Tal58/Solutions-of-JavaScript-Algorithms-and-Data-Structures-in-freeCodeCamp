// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
// let result = userCheck.test(username);



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

let num = 0; //* to generate different random numbers each time with more possibility
const randomGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;
/* console.log(randomGenerator(0,2))  */
button.addEventListener("click", function () {
  let random = randomGenerator(0,6);
  console.log("random genarated: ",random);

    while true {
        if (num != random) {
            fact.innerHTML = facts[random].quote
            break }
        }

//   if (num != random) {
//     fact.innerHTML = facts[random].quote
//     num = random;
//     console.log("if statament first number",num);
//   }else {
//     random = randomGenerator(random,6)+1;
//     if (random==6){
//       random = randomGenerator(0,random);
//       fact.innerHTML = facts[random].quote; 
//     }else{
//       fact.innerHTML = facts[random].quote; 
//     }
//     console.log("else statament random number",random);
//   }
//   console.log("esitlenmeden önce number",num);
//   num = random;
//   console.log("esitlenmeden sonra number",num);
})