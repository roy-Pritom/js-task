// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondLargestElement=(array)=>{
    let min=array[0];
    let secondMin=array[1];
    for(i=0;i<=array.length;i++){
        if(array[i]<min){
          secondMin=min;
          min=array[i];
      
        }else if(i>=1 && array[i]<secondMin) {
          secondMin=array[i];
        }
    }
    return secondMin;
}

const arr=[1,2,3,4,-1,-7,7];
console.log("Second Smallest element of array is:",secondLargestElement(arr));

