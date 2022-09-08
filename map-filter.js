const numbers=[3,5,2,1,234,2];
// const output=[];
// for(let i=0; i<numbers.length; i++){
//     const element=numbers[i];
//     const result=element*element;
//     output.push(result);
// }


// function square(element){
// return element*element;
// }
// const result=numbers.map(function(element){
//     return element*element;
// });

// const result=numbers.map(x=> x *x);
// console.log(result);

const result=numbers.filter(x=> x<5);
console.log(result);
const isther=numbers.find(x=> x>5);
console.log(isther);