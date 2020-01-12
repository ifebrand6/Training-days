var input = "turpentine and turtles";
const vowels = ['a','e','i','o','u'];
let resultArray = []
for (let i = 0; i < input.length; i++)
for (let k = 0; k < vowels.length; k++)
{
    if (input[i] === vowels[k]){
    resultArray.push(input[i]);
        if (input[i] === 'e'){
        resultArray.push(input[i] + 'e')
     }; 
        if (input[i] === 'u'){
        resultArray.push(input[i] + 'u')
     };
    }
};
console.log(resultArray.join('').toUpperCase());


// let input = "is";
// const vowels = ['a','e','i','o','u'];
// let resultArray = []
// for (let i = 0; i < input.length; i++)
// for (let k = 0; k < vowels.length; k++){
//     if (input[i] === vowels[k]){
//     resultArray.push(input[i])
//     console.log(resultArray.length);
//     }
// }
