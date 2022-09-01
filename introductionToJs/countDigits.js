let num = 11111111;
let count = 0;
console.log(count);
while(num>0){
    num = Math.floor(num/10);
    count = count + 1;
}
console.log(count);