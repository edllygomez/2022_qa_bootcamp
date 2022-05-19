// Problem 1 
const threeOrFiveMultiples = (number) => {

    let numbers = [];

    if (number < 0) return 0;

    for (let index = 1; index < number; index++) {
        if (index%3 === 0 || index%5 === 0) numbers.push(index);
    }

    return (numbers.reduce((prev, curr) => prev + curr, 0));
}

// Problem 2
const isNarcissisticNumber = (number) => {

    if (number < 0) return 'Should be a positive number'

    if (number > Number.MAX_SAFE_INTEGER) return 'The number is too large'
   
    function powFunction(prev, curr, index, arr) {
        if (index === 1) prev = Math.pow(prev,arr.length)
        return (prev + Math.pow(curr,arr.length))
    }

    return [...number.toString()].map(String).reduce(powFunction) === number
}

// Problem 3
const maskify = (toMask) => {

    let text = "";

    if(toMask) {
   
        function replaceChars(prev, curr, index, arr) {

            if (arr.length <= 4) return toMask

            if (index == 1) prev = "#"             
                        
            //return prev + curr
            if(arr.length - index <= 4) {
                prev += curr
            }
            else {
                prev += "#"
            }

            return prev
            
        }

        text = [...toMask.toString()].map(String).reduce(replaceChars)

        return text

    }
    else {
        return text
    }
    
}

// Problem 4
const isPanagram = (sentence) => {

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let flag = 0

    if (sentence.length < alphabet.length) return false

    for (element of alphabet) {
        
        let expression = `${element}`
        let regex = new RegExp(expression, 'i')
        let condition = sentence.search(regex)

        if(condition == -1) {
            flag = 1
            break;
        }
        
    }
   
    return flag == 0 ? true : false

}

// Problem 5
const countDuplicates = (text) => {
   
    let count = 0
    let totalCount = 0

    console.log(text)

    if(text) {
        function duplicates(prev, curr, index, arr) {
            index == 1 ? expression = `${prev}` : expression = `${curr}`
            let regex = new RegExp(expression, 'ig')
            count = (text.match(regex) || []).length;
            count <= 1 ? totalCount += 0 : totalCount++
            text = text.replace(regex,'')
            return totalCount
        }

        return [...text.toString()].map(String).reduce(duplicates)
    }
    else {
        return 0
    }

}
