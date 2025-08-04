// for
// for(let i=1;i<=5;i++){
//     console.log("hello");
// }

// while
// let i =0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// do-while
// let i =1;
// do{
//     console.log(i);
//     i++;
// }while(i<=20);

// for-of : used for strings & arrays
// let str = "Shubham";
// for(let i of str){
//     console.log(i);
// }

// for-in : used for objects
let product = {
  title: "Ball Pen",
  price: 20,
  color: "black",
};
for (let key in product) {
    console.log(key, ":", product[key]);
}
