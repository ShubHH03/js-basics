const user = {
    username: "shubh",
    id: 1,
    password: 123,

    getUserDetails: function(){
        console.log("Got user details!");
        console.log(this);
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.id);
// console.log(user.getUserDetails());


function User(username, id, password){
    this.username = username
    this.id = id
    this.password = password;

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User('Max', 2, 1234)
// const userTwo = User('Jimmy', 3, 2134)                 // over-rides the values of -> userOne, bcz new keyword is not used
// console.log(userOne);

const userThree = new User('Scout', 4, 4231)
const userFour = new User('Snax', 5, 4321)
// console.log(userThree);
console.log(userThree.constructor);
// console.log(userFour);