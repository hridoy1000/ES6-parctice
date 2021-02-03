const numbers = [2,5,4,3,7];
const output = [];

// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element * element;
// }

// const square = element => element*element;
// const square = x => x*x;

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// console.log(output);


const result = numbers.map(x => x*x);

console.log(result);

const bigger = numbers.filter( x => x < 3);

console.log(bigger);

const isThere = numbers.find(x => x > 5);

console.log(isThere);