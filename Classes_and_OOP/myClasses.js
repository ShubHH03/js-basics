class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User('john', 'john@gmail.com', 1234)
// console.log(userOne.encryptPassword());
// console.log(userOne.changeName());



// behind the scene
function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}#@`
}
user.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new user('james', 'james@gmail.com', 4321)
console.log(userTwo.encryptPassword());
console.log(userTwo.changeName());
