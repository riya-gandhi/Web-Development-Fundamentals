let arr1 = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 0];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let intersection = arr1.filter((v) => arr2.includes(v));
console.log(intersection);

// let intersection = arr2.filter(function (v, i) {
    
//     if (arr1.includes(v)) {
//         return true;
//     }
//     else return false;
// });

// console.log(intersection);
//