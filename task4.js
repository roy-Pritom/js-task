// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumber=(arr,target)=>{
    let left=0;
    let right=arr.length-1;

    while(left<right){
     const sum=arr[left]+arr[right];
     if(sum===target)
     {
        return [left,right]
     }
     else if(sum<target){
         left++;
        }
        else{
         right--;
     }
        

    }
    return [];

}

const sortedArray=[1, 3, 5, 7, 9, 11];
const value=14;
console.log("Indices of the two numbers:",findTwoNumber(sortedArray,value));




  