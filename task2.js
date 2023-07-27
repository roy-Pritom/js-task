// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfArray=(inputArray)=>{
let sum=0;
    for(let i=0;i<inputArray.length;i++)
    {
        if(inputArray[i]>=0)
        {
          sum+=inputArray[i];
        }
    }
    return sum;
}

const array=[2, -5, 10, -3, 7];
const result=sumOfArray(array);
console.log(result);

// output  = 19