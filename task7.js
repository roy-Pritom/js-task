// mplement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.



function romanNumberToInt(roman) {
    const romanNumbers = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeralValue = romanNumbers[roman[i]];
      const nextNumeralValue = romanNumbers[roman[i + 1]];
  
      if (currentNumeralValue < nextNumeralValue) {
        result -= currentNumeralValue;
      } else {
        result += currentNumeralValue;
      }
    }
  
    return result;
  }
 

  console.log(romanNumberToInt("XI"));  
  console.log(romanNumberToInt("XV"));   

  