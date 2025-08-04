// let x = [1,2,3,4,5];
// push() : add to end
// x.push(6);
// x.push(7,8);
// console.log(x);

// pop() : delete from end & return
// let deleted = x.pop();
// console.log(x);
// console.log(`deleted ${deleted}`);

// toString() : converts array to string
// console.log(x);
// console.log(x.toString());

// concat() : joins multiple arrays & returns result
// let y = [6,7];
// let z = x.concat(y);
// console.log(z);
// let a = [8,9,10]
// let b = x.concat(y,a);
// console.log(b);

// unshift () : add to start
// y.unshift(4,5);
// console.log(y);

// shift() : delete from start & return
// let del = y.shift();
// console.log(y);
// console.log(`deleted ${del}`);

// Slice() : returns a piece of the array
// slice(startIdx, endIdx)
// let names = ['Mortal', 'Scout', 'Snax', 'Regaltos', 'Viper', 'Joker']
// console.log(names.slice());
// console.log(names.slice(1,4));

// Splice() : change original array (add, remove, replace)
// splice(startIdx, delCount, newEl1...)
// let nums = [1,2,3,4,5,6,7];
// let rem = nums.splice(2,2)  // removes 2 nos after 2 nos from start
// console.log(rem);
// let add = nums.splice(2,2,103,104);    // removes 2 nos after 2 nos from start & adds 103 & 104
// let ad = nums.splice(7,0,800);         // after 7, remove 0 element & add 800
// nums.splice(3,1);                         // after 3, remove 1 element
// console.log(nums);

// forEach(callback function)
// CallbackFunction : Here, it is a function to execute for each element in the array
// let nos = [1,2,3,4,5];
// nos.forEach(function printVal(val){
//     console.log(val);
// });
// nos.forEach((val)=>{                        // Arrow function
//     console.log(val);
// });

// map: creates a new array with the results of some operation.
// arr.map( callbackFnx( value, index, array ) )
// let arr = [5,10,15];
// let newArr = nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);

// filter: Creates a new array of elements that give true for a conditionlfilter. Eg: all even elements
// let list = [1,2,3,4,5,6,7,8];
// let newList = list.filter((val)=>{
//     return val%2==0;
// });
// console.log(newList);

// reduce: Performs some operations & reduces the array to a single value. It returns that single value.
// let Num = [1, 2, 100, 3, 4];
// let neWNum = Num.reduce((result, curr) => {
//   return result+curr
// });
// console.log(neWNum);


let num = [1, 2, 100, 3, 4];
let newNum = num.reduce((result, curr) => {
  return result > curr ? result : curr;
});
console.log(newNum);
 