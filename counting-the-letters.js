// Escribe una función que dado un input "aaaabbbbbcca" 
// devuelva un output: [["a", 4], ["b", 5], ["c", 2], ["a", 1]]

// input = "aaaabbbbbcca";
// output = [["a", 4], ["b", 5], ["c", 2], ["a", 1]];

function countingLetters(str){
    let result = [];
    let count = 1;

    for(let i=1; i <= str.length ; i++){
        if(str[i] === str[i - 1]){
            count++;
        } else {
            result.push([str[i - 1], count])
            count = 1;
        }
    }
    return result;
}
console.log(countingLetters("aaaabbbbbcca"))