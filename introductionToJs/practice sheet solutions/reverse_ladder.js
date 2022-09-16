let n = 5;
let temp = "";

for(let i=1;i<=n;i++){
    temp = "";
    for(let j=1;j<=n-i;j++){
        temp+=" ";
    }
    for(let j=1;j<=i;j++){
        temp+="*";
    }
    console.log(temp);
    
}