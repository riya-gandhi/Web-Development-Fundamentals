let n = 123456123;
// ans will be 423156123 - 453126123 - 456123123
let k = 3; // right rotation
// let k2 = -3; // left rotation

// brute force method is creating an array, placing each digit after rotation and construction of num
// OR break the number from front or back depending on the sign of k

let nStr = Number.toString(n);

if(k>=0){
    if(k==0){
        console.log(n);
    }
    else{
        let ans1 = nStr.substring(nStr.length - k) + nStr.substring(0, nStr.length - k);
        console.log(ans1);
    }
}
else{
    
    let ans2 = nStr.substring(k) + nStr.substring(0, k);
    console.log(Number(ans2));
}

