function add(num1, num2){
    if(num2==undefined){
        num2=0;
    }
    return num1+num2;
}
const total=add(15);
console.log(total);