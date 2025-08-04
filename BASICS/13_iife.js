// Immediately Invoked Function Expressions (IIFE)
// IIFE are typically used to create a local scope for variables to prevent them from polluting the global scope.

// Syntax:
// (function (){ 
//     // Function Logic Here. 
// })();

(function hello(){
    // named IIFE: as function has a name 'hello'
    console.log(`DB CONNECTED`);
})();

// ( () => {                                        // un-named IIFE
//     console.log('DB connected!');
// })();

( (name) => {                                       // un-named IIFE with parameter
    console.log(`DB CONNECTED TWO ${name}`);
} )('max')