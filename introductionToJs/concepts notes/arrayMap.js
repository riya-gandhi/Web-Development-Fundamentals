//node arrayMap.js
//v is a string and i is index
//names is an array with Riya,Gandhi then in second iteration Divyansh,gandhi
//names[0][0] gives 

let arr = ["Riya gandhi", "Divyansh Gandhi"];

//v has "Riya Gandhi" and i has 1
//v has "Divyansh Gandhi" and i has 2

//map is also called an iterator

let iarr = arr.map(function (v, i) {
    let names = v.split(" ");
    return names[0][0] + "." + names[1][0];
});

console.log(iarr);

let newarray = [12, 2, 32, 42, 52, 62, 73, 88];
let arr2 = newarray.map(v => v % 2 == 0);
//this is called arrow function
//means get v, check if v%2==0
//if yes, return true else false

console.log(arr2);

//next important function is filter()
//when we write filter() we only return true or false
//filter function only adds true values

let arr3 = [4, 8, 12, 3, 4, 55, 78];
let arr4 = arr3.filter(v => v % 4 == 0);
console.log(arr4);

//not using arrow func

let arr5 = arr3.filter(function (v, i) {
    if (v % 4 == 0) {
        return false;
    }
    else return true;
});

console.log(arr5);

//next important function is reduce function

let arr6 = [10, 20, 30, 40];
let arr7 = arr6.reduce(function (pv, cv, ci) {
    console.log(pv + " " + cv + " " + ci);
    return cv+pv;
},44);  //here 44 is an initial value number else pv takes idx 1, cv takes idx 2

console.log(arr7);

//using reduce() to convert 2d array into 1d array

let arr8 = [[1, 2, 3], [3, 4, 5], [5, 6, 7, 8, 8, 9]];

let arr9 = arr8.reduce(function (pv, cv, ci) {
   
    return pv.concat(cv);
}, []);

console.log(arr9);

//using reduce() to calculate f(g(h(x)))

function f(x) {
    return x * x;
}

function g(x) {
    return 2 * x * x;
}

function h(x) {
    return x / 5;
}

let arr11 = [f, g, h]   //array of functions

let arr12 = arr11.reduce(function (pv, cv, ci) {
    return cv(pv);
}, 1);

console.log(arr12);

//next function is some() returns true if someone element fulfills the criteria given 
//else if entire array returns false, some() returns false


