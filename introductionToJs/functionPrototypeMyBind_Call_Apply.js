// Function.prototype.myBind = function () {
    
//     let orginalFunc = this;
//     let argsArray = Array.from(arguments);
//     let newThis = argsArray[0];
//     let newParameters = argsArray.slice(1);

//     let myFun = function () {
//         let moreParams = Array
//     }
// }
Function.prototype.myBind = function(){
    let orgFun = this;
    let argsArray = Array.from(arguments);
    let newThis = argsArray[0];
    let newParams = argsArray.slice(1);

    let myFun = function(){
        let moreParams = Array.from(arguments);
        let totalParams = newParams.concat(moreParams);

        orgFun.apply(newThis, totalParams);
    }

    return myFun;
}

let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullName: "Sumeet Malik",
    age: 34
};

let o2 = {
    fullName: "Neha",
    age: 33
};

// obj.fun1("Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
// obj.fun1.call(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
// obj.fun1.apply(o2, ["Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil"]);
let boundFunction = obj.fun1.myBind(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
boundFunction("Jasbir", "Pankaj");
boundFunction("Mehwish", "Shailja");


Function.prototype.myCall = function(){
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args.slice(1);

    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;

    // arr = [10, 20, 30, 40, 50]
    // ...arr = 10, 20, 30, 40, 50
}

Function.prototype.myApply = function(){
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args[1];

    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;
}

let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ".");
        console.log(this.fullName + " says hello to " + frnd1 + ".");
        console.log(this.fullName + " says hello to " + frnd2 + ".");

        console.log(arguments);
    },
    fullName: "Sumeet Malik",
    age: 34
};

let o2 = {
    fullName: "Neha",
    age: 33
};

// obj.fun1("Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
// obj.fun1.myCall(o2, "Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil");
obj.fun1.myApply(o2, ["Vikas", "Navdeep", "Jitu", "Rajneesh", "Kapil"]);