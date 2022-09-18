function findLongestWordLength(str) {
    let counter = 0
    let newStr1 = ""
    let newStr = str.split(" ")
    for (const x of newStr) {      
        if (x.length > counter) {
            newStr1 = x   
            counter =x.length             
        }   
        
    }return counter;}

findLongestWordLength("The quick brown fox jumped over the lazy dog");