//*******************************FUNCTIONS IN JS***********************************************

// function hello(){       //function definition
//     console.log("Hello");
// }
// hello();        //func calling

//  function printname(){
//     let n = prompt("Enter your name please")
//     console.log("Hello",n)
//  }

//  printname();

// function which create a random number on dice
function rolldice() {
    console.log("dice roll......");
    console.log("the number generates is", Math.floor(Math.random() * 6) + 1);
}
rolldice();
rolldice();

// // FUNCTIONS WITH ARGUMENTS

function info(name, age) {
    console.log(`${name}'s age is :${age}`);
}

info("Aditya", 20);
info("Varun", 23);
info("Shailesh"); // don;t show error bss age ki jagah undefined show ho jayega   //Shailesh's age is :undefined

// // GIVES AVERAGE OF THREE NUMBERS
// function avg(a,b,c){
//     sum = (a+b+c)/3
//     return sum;
// }

// console.log("the average is",avg(2,2,2));

// // TABLE
// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(n,"X",i,"=",n*i);
//     }
// }

// table(5);

// // SUM FROM 1 TO N
// function truth(n){
//     s =0;
//    for(let i=1;i<=n;i++){
//       s+=i;
//    }
//    return s;
//  }
//  console.log(truth(5));

//  function returnthe concatenation of all string in an array
function concat(arr) {
    let p = "";
    for (let i = 0; i < arr.length; i++) {
        p += arr[i] + " ";

    }
    return p;
}
let t = concat(["Mango", "is", "yellow", "in", "color"]);
console.log(t);

//SCOPE
let x = 544;        //global scope
function summation(a, b) {
    let x = 23;     //function scope
    return a + b + x;
}
console.log(summation(10, 2));   //10+2+23 = 35

// {
//     // block scope
//    let a=34; // ye sirf or sirf agr var diya hai tabhi bahar access hoga const or let me nhi
// }
// // console.log(a)


// // LEXICAL SCOPE

function outer() {
    let a = 88;  //(function scope)
    let b = 12;

    function inner() {  //(lexical scope) ye function variable ki tarah kaam krega
        let p = 44;
        console.log(a); //ham is function ke andr outer wale function ke variable access krr skte haii
        // lekin agr inner ke variables  outer me access kiye to nhi honge
    }
    console.log(p);
    inner();

};

outer();

// inner(); // ye error dega kyuki inner function ko outer ke bahar access nahi kiya jaa skta

// HOISTING 
function outer() {

    function inner() {
        c = 44;
        console.log(a);     //variable a define krne se pehle hi use kiya jaa rha 
    }
    let a = 88;
    let b = 12;

    inner();
};

outer();    //STILL NO ERROR    due to hoisting in js

// //FUNCTION EXPRESSION variable is assign a function

let add = function (a, b) {
    return a + b;
}
console.log(add(2, 3))  //using function with variable name

//  HIGHER ORDER FUNCTION 
// function which takes another function as an argument or returns a function as output is called higher order function

// 1. function which takes another function as an argument

function multiplGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}
let greet = function () {
    console.log("hi guyss");
}
multiplGreet(greet, 2);  //2  times hi guyss //greet as argument

// 2. function which returns a function as output

function OddorEvenFactory(request) {
    if (request == "odd") {
        return function (n) {     //function as return value
            return n % 2 != 0;
        }
    }
    else if (request == "even") {
        return function (n) {
            return n % 2 == 0;
        }
    }
    else {
        return function () {
            console.log("invalid request")
        }
    }
}
let odd = OddorEvenFactory("odd");  //odd function
let even = OddorEvenFactory("even"); //even function
console.log(odd(3));  //true
console.log(odd(4));  //false
console.log(even(3)); //false
console.log(even(4)); //true

// METHODS IN JS
//  method is a function which is associated with an object

//jo function object ke andar define hota hai usko method bolte hai

const cal = {       //cal is an object
    add: function (a, b) {    //add jo key hai vo ek function hai jo cal object ke andar hai = method add(a,b)
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    }
}
//to use the methods we have to call the object name first and then the method name
console.log(cal.add(2, 3)); //5
console.log(cal.sub(2, 3)); //-1 
console.log(cal.mul(2, 3)); //6

//eg : Math.random()  //Math is an object and random is a method of Math object

// Method shorthand
const calci = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
}

console.log(calci.add(2, 3)); //5    
console.log(calci.sub(2, 3)); //-1
console.log(calci.mul(2, 3)); //6


