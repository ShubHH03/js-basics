
// Q1-Check if number entered is divisible by 5 or not
// let num = prompt("Enter a number: ");
// if(num%5==0){
//     console.log("Divisible by 5");
// }else{
//     console.log("Not divisible by 5");
// }


// Q2-Output the grades based on score
let score = prompt("Enter your score(0-100): ");
if(score>=90 && score<=100){
    alert("Grade A");
}
else if(score>=70 && score<=89){
    alert("Grade B");
}
else if(score>=60 && score<=69){
    alert("Grade C");
}
else if(score>=50 && score<=59){
    alert("Grade D");
}
else if(score>0 && score<=49){
    alert("Grade F");
}