function houseKeeper(name, exp, task){
    this.name = name;
    this.exp = exp;
    this.task = task;
}
var houseKeeper1 = new houseKeeper ("Tom", 9, ["Bathroom", "Bedroom"]);
console.log(houseKeeper1);
console.log(houseKeeper1.exp);