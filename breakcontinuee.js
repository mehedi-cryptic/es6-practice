// const nums=[1,2,3,4,5,6,7,8];
// for (let i=0; i<nums.length; i++){
//     console.log(nums[i]);
//     if(nums[i]>5){
//         break;
//     }
// }
const nums=[1,-2,-3,4,5,6,7,8];
for (let i=0; i<nums.length; i++){
    // console.log(nums[i]);
    if(nums[i]<0){
        continue;
    }
    console.log(nums[i]);
}