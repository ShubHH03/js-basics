
// Q1-Print all even nos from 0-100
// let count =0;
// for(let i=0; i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//         count++;
//     }
// }
// console.log("Count of even numbers: ", count)


// Q2-guess game (use html file to run below code)
let str = "book";
let user = prompt("Guess the four letter word with two o's in it: ");
do{
    user = prompt("You entered wrong word, Try again: ")
}while(user!==str);

console.log("Congratulations, you guessed it right!!")