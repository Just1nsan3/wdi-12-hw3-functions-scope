// console.log("hello")

// const calculateSide = (sideA, sideB) => {
//   // figure side c
//   // a^2 + b^2 = c^2

//   const aSq = sideA * sideA;
//   const bSq = sideB * sideB;

//   const sideC = Math.sqrt(aSq + bSq)

//   return sideC
  

// }

// console.log(calculateSide(3, 4));




// console.log("review")

// const calculateSide = (sideA, sideB) => {
//   // figure side C
//   //  =  c^2

//   /// sqrt(a^2 + b^2)

//   const aSq = sideA * sideA;
//   const bSq = sideB * sideB;

//   const sideC = Math.sqrt(aSq + bSq)

//   return sideC

// }

// console.log(calculateSide(3, 4));
// console.log(calculateSide(8, 15));


// functions are like a "black box"
const checkPandigital = (num) => {

  /// if 0
  if(num == 0) {
    return false // this will immediately stop exectuction 
                  // and exit the function
  }

  // convert to array
  
  const numStr = num.toString();
  const digitArr = numStr.split("");

  // if array.length > 9
  if(digitArr.length > 9) {
    console.log("array.length > 9 so nope")
    return false;
  }

  // if the largest digit is not equal to digitArr.length
  let biggestDigitSoFar = digitArr[0]

  // loop -- check each digit -- to find the largest 
  for(let i = 0; i < digitArr.length; i++) {
    if(digitArr[i] > biggestDigitSoFar) {
      biggestDigitSoFar = digitArr[i];
    }
  }
  if(biggestDigitSoFar != digitArr.length) {
    console.log("largest digit != array length so nope")    
    return false;
  }

  // for each digit
  for(let i = 0; i < digitArr.length; i++) {
    
    // if its a zero or 
    if(digitArr[i] === "0") {
      console.log("found a zero so nope")
      return false
    }

    // if it appears somewhere else in array
      // return false
    for(let j = i+1; j < digitArr.length; j++) {
      if(digitArr[i] === digitArr[j]) {
        console.log("repeating digit")
        return false;
      }
    }
  }
  
  return true;

} // checkPandigital()

console.log(checkPandigital(12346))
console.log(checkPandigital(1234567890))
console.log(checkPandigital(10345))
console.log(checkPandigital(12335))
console.log(checkPandigital(12345))











