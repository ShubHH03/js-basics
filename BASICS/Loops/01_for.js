// for

for (let i = 0; i <= 10; i++) {
    const num = i;
    if (num == 5) {
        //console.log("5 is best number");
    }
    //console.log(num);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let arr = ["flash", "batman", "superman"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element);
    
}


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${i}`);
    
}