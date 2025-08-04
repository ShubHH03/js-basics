function setUsername(username){
    // complex DB calls
    this.username = username
    // console.log("called");
}

function createUser(username, email, password){
    // setUsername(username)                       // function is called but, no reference is hold
    setUsername.call(this, username)               // to hold reference, call is used

    this.email = email
    this.password = password
}

const userOne = new createUser("Max", "max@gmail.com", 123)
console.log(userOne);