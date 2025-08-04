
// Q1 - Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.
// function countVow(str) {
//     let cnt = 0;
//     for (const vow of str) {
//         if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u") {
//             cnt += 1;
//         }
//     }
//     console.log(`Number of vowels in (${str}): ${cnt}`);
// }
// countVow("helloo worldd");

// Q2 - Create an arrow function to perform above task
// const vow = (str) => {
//     let cnt = 0;
//     for (const vow of str) {
//         if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u") {
//             cnt += 1;
//         }
//     }
//     console.log(`Number of vowels in (${str}): ${cnt}`);
// };
// vow("aeiouuu");


// Q3 - For a given array of numbers, print the square of each value using the forEach loop.
// let square = [5,6,7,8];
// basic function
// square.forEach(function print(val){
//     console.log(val*val);
// });

// arrow function
// method-1
// square.forEach((val)=>{
//     console.log(val*val);
// });

// method-2
// let result = (val) =>{
//     console.log(val*val);
// };
// square.forEach(result)



// Q4 - For given array of marks of students, Filter out of the marks of students that scored 90+.
// let marks = [87,93,99,64,86];
// let output = marks.filter((val)=>{
//     return val>90;
// });
// console.log(output);


// Q5 - Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
// let n = prompt("Enter a number: ")       
let n =4;                                        // because prompt works only in console
let numbers = [];

for(let i=1;i<=n;i++){
    numbers[i-1]=i;
}
console.log(numbers);
let sum = numbers.reduce((prev, curr)=>{
    return prev+curr;
});
console.log(sum);
let factorial = numbers.reduce((prev, curr)=>{
    return prev*curr;
});
console.log(factorial);