/// Q1-Find the average marks of the entire class for the given array
// let x = [85,97,44,37,76,60];
// let sum = 0;
// for(let i of x){
//     sum+= i;
// }
// console.log(sum);
// let avg = sum/ x.length;
// console.log(avg);



// Q2 - For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

let prices = [250, 645, 300, 900, 50];
// let i =0;
// for(let val of prices){
//     let offer = (val/10);
//     // console.log(off);
//     prices[i] = prices[i] - offer;
//     i++;
// }
// console.log(prices);

for(let i=0; i<prices.length;i++){
    let offer = prices[i]/10;
    prices[i] = prices[i] - offer;
}
console.log(prices);



// Q3 - Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
let remove = company.shift();
console.log(company);

let rem = company.splice(2,1,"Ola");
console.log(company);

let add = company.push("Amazon");
console.log(company);
