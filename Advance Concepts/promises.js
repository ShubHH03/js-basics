const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

     setTimeout(function(){
        // console.log("Async task is complete");
        resolve();
     },1000)
})

promiseOne.then(function(){
    // console.log('Promise consumed');
})

// Promise two (without storing in a variable)
new Promise(function(resolve, reject){
    setTimeout(function () {
        // console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    // console.log('Async 2 resolved');
})


// Promise three
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        // console.log('Async 3');
        resolve({username:"MAX", email: "max@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// Promise four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Promise 4');
        let error = false;
        if(!error){
            resolve({username: "max", password: "#123"})
        } else{
            reject('ERROR!')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
})



// Promise Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise 5');
        let error = true;
        if(!error){
            resolve({language: "javascript", extension: "js"})
        } else{
            reject("ERROR! Something went wrong");
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// consumePromiseFive()

// proper way
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// using try-catch
// async function getAllUsers(){
//     try {
//         // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const response = await fetch('https://json-placeholder.mock.beeceptor.com/todos')
//         const data = await response.json();
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()



// using then-catch
fetch('https://api.github.com/users/ShubHH03')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})