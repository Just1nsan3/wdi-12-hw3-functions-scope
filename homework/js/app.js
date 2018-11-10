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


//2. A parameter is the variable/input that is setup during a function declaration
// An argument is the input into the function when the function is being called.

//3. A return statement will not print anything anywhere by itselt. It will pass the value to the place where the function was actually called. A console.log inside of a function will actually print that value to the console.



//Palindrome

const palindrome = (input) => {
  input = input.toLowerCase();
  const splitString = input.split('');
  const reversedArray = splitString.reverse();
  const reversedWord = reversedArray.join('')
  if (reversedWord === input) {
    return true
  }
  return false
}

console.log(palindrome('Radar'));
console.log(palindrome('borscht'));

const sumDigits = (num) => {
  const stringDigits = num.toString();
  const arrDigits = stringDigits.split('');
  let sumNum = 0;
  for (let i = 0; i < arrDigits.length; i++) {
    sumNum = sumNum + parseInt(arrDigits[i])
  }
  return sumNum;
}

console.log(sumDigits(12345));


const calculateSide = (num1, num2) => {
  total = Math.pow(num1, 2) + Math.pow(num2, 2);
  return Math.sqrt(total);
}

console.log(calculateSide(8, 6));

const sumArray = (arrNum) => {
  let total = 0;
  for(let i = 0; i < arrNum.length; i++) {
    total = total + arrNum[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

const checkPrime = (number) => {
  squareRoot = Math.sqrt(number);
  for(let i = 2; i <= squareRoot; i++) {
    if(Number.isInteger(number / i)) {
      return false
    }
  }
  return true
}

console.log(checkPrime(7));

const printPrime = (limit) => {
  let check = 0;
  for (let i = 2; i <= limit; i++) {
    check = checkPrime(i);
    if(check === true) {
      console.log(check, i);
    }
  }
}

printPrime(97);


const insertDash = (num) => {
  const stringDigits = num.toString();
  const arrDigits = stringDigits.split('');
  console.log(arrDigits.length)
  let newArrDigits = [];
  for(let i = 0; i < arrDigits.length; i++) {
    newArrDigits[i] = parseInt(arrDigits[i]); 
    console.log(newArrDigits);
  }

  for(let j = 0; j < newArrDigits.length; j++) {
    console.log(newArrDigits[j-1], newArrDigits[j]);
    if( ((newArrDigits[j - 1] % 2 ) === 1 ) && ((newArrDigits[j] % 2) === 1 )) {
      newArrDigits.splice(j, 0, '-');
    }
  }

  return newArrDigits.join('');

}

console.log(insertDash(875467799753754));



//Chessboard

const boardSize = 8;
const space = ' ';
const pound = '#';

evenBoard = [];
oddBoard = [];

for(let i = 0; i < boardSize; i++) {
  if(i % 2 === 0 ) {
    evenBoard[i] = space;
  } else {
    evenBoard[i] = pound;
  }
} 

for(let i = 0; i < boardSize; i++) {
  if(i % 2 === 0 ) {
    oddBoard[i] = pound;
  } else {
    oddBoard[i] = space;
  }
} 

console.log(evenBoard);
console.log(oddBoard);

finalBoard = [];

for(let j = 0; j < boardSize; j++) {
  if(j % 2 === 0 ) {
    finalBoard[j] = evenBoard;
  } else {
    finalBoard[j] = oddBoard;
  }
}

for(i = 0; i < boardSize; i++) {
  console.log(finalBoard[i].join());
}











