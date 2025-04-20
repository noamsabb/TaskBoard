var a;
console.log("a = ", a);
// var a = 10; //Hoisting
a= 10;
console.log("a = ",a);

const num = 10;
if(num === 10){
    var b = 20;
}


let age = 20;
function f2(){
    console.log("age = ", age);
}

f2();