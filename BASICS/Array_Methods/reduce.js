const myNums = [1,2,3,4,5]

// acc: accumulator  &  cv: current value
// const myTotal = myNums.reduce(function(acc, cv){
//     console.log(`acc: ${acc} & cv: ${cv}`);
//     return acc+cv;
// },0)                                   // 0: start point of accumulator

const myTotal = myNums.reduce( (acc, cv) => acc+cv, 0)

console.log(`Total: ${myTotal}`);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);