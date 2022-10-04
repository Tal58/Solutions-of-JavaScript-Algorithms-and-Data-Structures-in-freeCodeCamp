function translatePigLatin(str) {
    let vowel_list = ["a", "e", "i", "o", "u"]
    let newArr = []
    let counter = 0
    newArr = str.split("")
    let counter2 = 0
    if (vowel_list.includes(newArr[0])) {
        newArr.push("way")
        newArr = newArr.join("")
        return newArr
    } else {
        for (const x of vowel_list) {
            if (newArr.includes(x)) {
                counter2++
            }
        }
        if (counter2 > 0) {
            for (let i = 0; i < newArr.length; i++) {
                if (vowel_list.includes(newArr[i])) {
                    newArr.push("ay")
                    newArr = newArr.join("")
                    break
                } else {
                    newArr.push(newArr[i])
                    counter++
                }
            }
            newArr = newArr.slice(counter, newArr.length)
            return newArr
        }else{
                newArr.push("ay")
                newArr = newArr.join("")
                return newArr
            
        }
    }

}

translatePigLatin("consonant");