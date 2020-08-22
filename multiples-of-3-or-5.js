/* 
(CODEWARS - 6kyu, Sensei: jhoffner) 

INSTRUCTIONS:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net
*/

//MY SUBMISSION

function solution(number){ // intialize function that will return either 0 or sum
  let multiNum = []; //define an empty array to capture all multiples of 3 or 5
  for (let i = 1; i < number; i++){ //initialize loop to determine multiples
    if (number < 0) { //if 'number' is negative, return 0
      return 0;
    }
    else if ((i % 3 == 0) || (i % 5 == 0 )) { //put all multiples of 3 or 5 into array
      multiNum.push(i); 
    } 
  }

  let sumNum = 0; //initialize return variable: sumNum
  for (let j = 0; j < multiNum.length; j++){ //iterate through array of multiples
    //console.log(multiNum[j]);
    sumNum += multiNum[j]; //sum multiples
  }
  return sumNum;//return sum
}

//SENSEI's ANSWER:

function solution(number){ //initialize the function that will return either 0 or sum
  var sum = 0; //initialize return variable (NOTE: this also takes care of the 'return 0' requirement for negative numbers)
  
  for(var i = 1;i< number; i++){ //iterate through loop to determine multiples
    if(i % 3 == 0 || i % 5 == 0){ //if 'i' is a multiple of 3 or 5, add to return variable
      sum += i
    }
  }
  return sum; //Return variable value
}
