
const user = {
  username: "max",
  age: "23",

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
}

user.welcomeMessage()
// user.username = "chris";
// user.welcomeMessage() 

// console.log(this);  ---> ()

// function hello(){
//     let username = "harry"
//     console.log(this.username);          // works only in objects
// }

// hello()



// arrow functions
// 1. explicit return
const mulFun = (x, y) => {
  return x * y;
};
res = mulFun(2, 3);
// console.log(res);




// 2. implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})             // to return an object


