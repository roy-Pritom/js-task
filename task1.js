// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// function

const reverseString=(inputString)=>{

    let reversed='';
    const n=inputString.length;
    for(let i=n-1;i>=0;i--)
    {
        reversed+=inputString[i]
    }
    return reversed;
}

console.log(reverseString('hello world'));

// output:  dlrow olleh
