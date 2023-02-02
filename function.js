// odd even 


// function isEven(number){
//     const remainder = number % 2;
//     // console.log(remainder);

//     if(remainder === 0){
//         // console.log('number is even')
//         return true;
//     }
//     else{
//         // console.log('number is odd');
//         return false;
//     }
// }

// const myNumberIsEven = isEven(308);
// console.log(myNumberIsEven);
// const herNumberIsEven = isEven(55);
// console.log(herNumberIsEven);


// leap yr 

// function isLeapYear(year){
//      const remainder = year % 4;
//      if(remainder === 0){
//     //    console.log('your year is leap year' ,year);
//     return true;
//      }
//      else{
//     // console.log('yr yr is not leap year' , year);
//     return false;
//      }
// }

// const isMyYear = isLeapYear(2020);
// console.log('my yr is' , isMyYear);

// const isHerYear = isLeapYear(2023);
// console.log('her yr is ' , isHerYear);



// array elements 

// function getSumOfAnArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(index,element); 
//     }
// }

// const myNumbers = [ 12,45,34,67,23,55,24,89];
// getSumOfAnArray(myNumbers);


// array sum 

// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index,element,sum); 
//     }
//     return sum;
// }

// const myNumbers = [ 12,45,34,67,23,55,24,89];
// getSumOfAnArray(myNumbers);



// get odd numbers of an array 

// function getOddNumberOfAnArray(numbers){
// for(let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element % 2 !== 0){
//         console.log(element);
//     }
//     }
// }

// const myNumberIs = [ 12,45,34,67,23,55,24,89];
// getOddNumberOfAnArray(myNumberIs);



// odd numbers in array 

// function getOddNumberOfAnArray(numbers){
//     const oddNumbers = [];
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         if(element % 2 !== 0){
//             console.log(element,sum);
//             oddNumbers.push(element);
//         }
//         }
//         return oddNumbers;
//         return sum;
//     }
    
//     const myNumberIs = [ 12,45,34,67,23,55,24,89];
//     const oddNumbers =     getOddNumberOfAnArray(myNumberIs);
//     console.log(oddNumbers);





// function getAllNumbers(numbers){
//     let sum = 0;
//     for(let i = 1; i <=7; i++){
//         sum = sum + i;
//         console.log(i,sum);
//     }
// }

// function sumOfNumbers(number){
//     let sum = 0;
//     for(let i = 1; i <= number; i++){
//         sum = sum + i;
//         console.log(i,sum);
//     }
//     return sum;
  
// }
// const myNumber = [8];
// sumOfNumbers(myNumber);


// multiplication of number 
// 3! = 3*2*1
// it calls factorials...like 3! 4!
// 4! = 4*3*2*1

// function factorial(number){
//     let multi = 1;
//     for(let i = 1; i <= number; i++){
//        multi = multi * i;
//     }
//     return multi;
// }

// const givenNumber = factorial(9);
// console.log(givenNumber);


// reverse factorial

// let factorial(number);

// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i;

// }
//     return result;
// }

// const myResult = factorial(9);
// console.log(myResult);


// factorial in while loop 

// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= number ){
//     result = result * num;
//     num ++;
//      }
//      return result;
      
// }

// const myNumber = factorial(7);
// console.log(myNumber);