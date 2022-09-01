function isPrime(n){
    let flag = true;
    for(let i = 2; i * i < n; i++){
        if(n%i==0){
            flag = false;
            break;
        }
    }
    return flag;
}

//main
//for command line input we use process.argv

import minimist from 'minimist';
let args = minimist(process.argv);

// let args = process.argv;
let lowerLimit = args.ll;
// console.log(lowerLimit);
let upperLimit = args.ul;
// console.log(upperLimit);

let i = lowerLimit;

for(i=lowerLimit;i<=upperLimit;i++){
    if(isPrime(i)==true){
        console.log(i);
    }
}
