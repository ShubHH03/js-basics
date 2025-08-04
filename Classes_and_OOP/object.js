function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2
console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
 


function createCar(brand, model){
    this.brand = brand
    this.model = model 
}