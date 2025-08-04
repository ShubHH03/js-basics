
// Take a symbol, add in keys & print
const mySym = Symbol("key1")

const product={
    title: "Cello",
    // mySym : "key1",          // not used as symbol
    [mySym] : "key1",        // correct way to add a symbol in object as a key
    price: 20,
    color: "Black",
}
console.log(product);

// console.log(product.title);
// console.log(product["title"]);

product.price = 50
// console.log(product);
// Object.freeze(product);
product.price = 30                                  // cant change the value as object is freezed
console.log(product);


// using a function with an object
product.type = function(){
    console.log(`${product.title} Ball Pen`);
}

console.log(product.type());