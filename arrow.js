// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*2;

const add = (x,y) => x+y;
const result = doubleIt(12);

console.log(result);
const result2 = add(12,12);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result10 = sum * diff;
    return result10 ;
}

const result4 = doMath(3,2);
console.log(result4);
