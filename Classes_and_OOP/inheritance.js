class Pen {
    constructor(brand){
        this.brand = brand
    }
    
    brandName(){
        console.log(`Pen brand: ${this.brand}`);
    }
    
}

class Properties extends Pen{
    constructor(brand, cost, color){
        super(brand)
        this.cost = cost
        this.color = color
    }

    price(n){
        console.log(`Cost of ${n} pens is ${this.cost*n}`);
    }
}

const buy5 = new Properties('Reynolds', '10', 'blue')
// buy5.price(5);

const penName = new Pen('Cello')
penName.brandName();
buy5.brandName();

// console.log(buy5 === penName);
console.log(buy5 instanceof Pen);