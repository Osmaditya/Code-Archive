//Array methods , default parameter , spread & rest , destructuring

//ARRAY METHODS

//FOR EACH  
// it executes a provided function once for each array element
// it does not return anything

let arr = [1, 2, 3, 4, 5];

// function print(el){
//     console.log(el);
// }
// arr.forEach(print); //1 2 3 4 5

//OR

arr.forEach(function (el) {
    console.log(el);
});

//using arrow fun in for each
arr.forEach((el) => {
    console.log(el);
});

// foreach in array of objects
let students = [{
    name: "Aditya",
    age: 20
}, {
    name: "Ayush",
    age: 18
}];

students.forEach(student => {
    console.log(student.name);
    console.log(student.age);
});

//map method
// map method ek new array return karta hai jo ki original array se derived hoti hai
// it does not change the original array
let num = [1, 2, 3, 4];
let doubled = num.map((el) => {
    return el * 2;
});
console.log(doubled); //2,4,6,8

//filter method
// filter method ek new array return karta hai jo ki original array se derived hoti hai based on some condition

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = nums.filter((el) => {
    return el % 2 == 0;
});
console.log(even); //2,4,6,8,10

//every method
// every method ek boolean value return karta hai jo ki true hoti hai agar saare elements condition ko satisfy karte hain   // otherwise false

let num1 = [2, 4, 6, 8, 10];
let allEven = num1.every((el) => {
    return el % 2 == 0;
});
console.log(allEven); //true

console.log([1, 2, 3, 4].every((el) => el % 2 == 0));//false

//some method
// some method ek boolean value return karta hai jo ki true hoti hai agar koi bhi element condition ko satisfy karta hai   // otherwise false
let num2 = [1, 2, 3, 4, 5];
let anyEven = num2.some((el) => {
    return el % 2 == 0;
});
console.log(anyEven); //true

console.log([1, 3, 5].some((el) => el % 2 == 0));//false

// reduce method
// reduce method ek single value return karta hai jo ki array ke elements ko reduce karke milti hai

let num3 = [1, 2, 3, 4, 5];
// let sum = num3.reduce((acc, el) => {
//     return acc + el;
// }); //initial value of acc is 0
// console.log(sum); //15

//arrow fun with implicit return
console.log("sum of elements:", num3.reduce((acc, el) => acc + el)); //15



// FINDING MAX. ele FROM AN ARRAY WITH THE HELP OF REDUCE FUNCTION
let t = [2, 3, 67, 5, 89, 23, 67, 3, 5];
let maximum = t.reduce((max, el) => {
    if (el > max) {
        return el;
    }
    else {
        return max;
    }

});
console.log("maximum : ", maximum); //89

// Q: all numbers in an array are multiple of 10 or not
let g = [40, 70, 60, 30, 50];
let mul = g.every((e) => e % 10 == 0); //true
console.log(mul);

// Q: find the min. number in an array
let p = [2, 3, 67, 5, 89, 23, 67, 3, 5];
let min = t.reduce((r, e) => {
    if (e < r) {
        return e;
    }
    else {
        return r;
    }

});
console.log("minimum :", min);

//Default parameters
function sum(a, b = 0) { //b is default parameter
    return a + b;
}
// default para ko end me hi likhte hai 
console.log(sum(5)); //5
console.log(sum(5, 10)); //15

//Spread operator
// spread operator ko array/string ko expand karne ke liye use kiya jata hai
// isse hum array ke elements ko alag alag arguments ki tarah pass kar sakte hain

console.log(..."Terrorism"); //T e r r o r i s m
console.log(...[1, 2, 3, 4]); //1 2 3 4
let list = [1, 2, 3, 4];
console.log("min ele;:", Math.min(...list)); //1

//Spred with Array Literal
let arr1 = [1, 2, 3];
let copyArr = [...arr1]; //1 2 3 
console.log(copyArr); //1 2 3

let chars = [..."hello"];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

let o = [1, 3, 5];
let e = [2, 4, 6];
let arr2 = [...o, ...e]; //1 3 5 2 4 6
console.log(arr2); //1 3 5 2 4 6

//Spraed with Object Literal
let obj1 = {
    name: "Aditya",
    age: 20
};
let obj2 = { ...obj1, city: "Delhi" }; //name, age, city
console.log(obj2); //{name: "Aditya", age: 20, city: "Delhi"}

array = [1, 2, 3, 4, 5];
let obj = { ...array }; //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}     // ye array ko object me convert karta hai but not vice versa
console.log(obj); //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
//index ko key ki tarah treat karta hai aur elements ko value ki tarah treat karta hai

//REST in js
// allow krta hai ek function ko multiple arguments lene k liy aur phir unhe ek single array me store kr deta hai

function sum(...args) {
    return args.reduce((acc, el) => (acc + el));
}
console.log(sum(1, 2, 3, 4, 5));    //15   //1,2,3,4,5 arguments lekar args array me store kr diya phir uspe opn lgaya reduce

function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You give us ", args[i]);
    }
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

//arguments 
function minn() {
    console.log(arguments);
}
minn(1, 2, 3, 4);
// ARGUMENTS array nhi hota mtlb ham  argument me array ke method use nhi krr skte
// ye ek collection hai element ka

// DESTRUCTING  
// storing values of array into multiples variables

let names = ["tony", "stark", "peter", "steve", "mike"];
// use [] braces for array destructuring 
let [winner, runnerup, ...others] = names;    //winner = names[0] runnerup = names[1] ,  ...others = names[remaining] using rest concept
console.log(winner); //tony
console.log(runnerup);  //stark
console.log(others); //(3) ['peter', 'steve', 'mike']

// destructuring with objects
const student = {
    name: "Aditya",
    salary: 8000095,
    company: "Google",
    id: 786
};
// use curly braces for object destructuring 
let {name ,salary} = student;

console.log(name);  //name = student.name       //Aditya
console.log(salary);    //8000095

let { name: naam, id: identity, city = "mumbai" } = student;
// yha pe ham jo variable object me likhte hai unko bhi use krr skte  hai ya unki koi default value bhi bana skte hai like city=mumbai
console.log(naam);  //Aditya
console.log(identity);  //786
console.log(city);  //Mumbai
