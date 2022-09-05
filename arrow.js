// function doubleit(num){
//    return num*2;
// }

const doubleit=num=>num*2;
const result =doubleit(5);
console.log(result);

const add=(x,y)=>x+y;
const result1=add(2,3);
console.log(result1);

const math=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const result3=math(1,2);
console.log(result3);